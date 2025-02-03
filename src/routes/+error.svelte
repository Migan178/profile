<script>
  import { page } from '$app/stores'
</script>

<main>
  <div class="mt-75 text-center text-3xl">
    <h1>{$page.status} {$page.error?.message}</h1>
    <a href="/">홈으로 가기</a>
  </div>
</main>
