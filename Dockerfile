# Builder
FROM node:24-alpine AS builder
WORKDIR /app

COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

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