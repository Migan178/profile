# Builder
FROM node:24-alpine AS builder
WORKDIR /app

ENV CI=true

RUN npm install --global pnpm

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build
RUN pnpm prune --prod

# Runner
FROM node:24-alpine AS runner
WORKDIR /app

# 빌드 결과물과 필요한 파일만 복사
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
ENV NODE_ENV=production
ENV HOST=0.0.0.0

CMD ["node", "build"]