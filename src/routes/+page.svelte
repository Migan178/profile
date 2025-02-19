<script lang="ts">
  import myProfileBg from '$lib/images/myprofile-bg.png'

  let qwer: number
  const birth = new Date('2010-01-31T04:28:00+09:00').getTime()
  qwer = Date.now() - birth
  setInterval(() => {
    qwer = Date.now() - birth
  })
</script>

<main>
  <div class="text-center">
    <img
      src={myProfileBg}
      alt="Migan's profile/미간의 프로필"
      class="rounded-[50%] m-auto mt-50"
      width="150"
    />
    <h1 class="text-5xl">Migan</h1>
    <h2 class="mt-3">태어난지 {new Intl.NumberFormat().format(qwer)}ms</h2>
  </div>
  <ul class="list-none flex items-center justify-center">
    <li class="px-7 py-8 text-xl">
      <a href="https://github.com/Migan178" target="_blank">깃허브로 가기</a>
    </li>
    <li class="px-7 py-8 text-xl">
      <a href="/projects">프로젝트</a>
    </li>
  </ul>
</main>
