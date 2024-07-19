<script>
  import { page } from '$app/stores'
</script>

<main>
  <div class="not_found">
    <h1>{$page.status} {$page.error?.message}</h1>
    <a href="/">홈으로 가기</a>
  </div>
</main>

<style>
  .not_found {
    text-align: center;
    font-size: 20px;
  }
</style>
