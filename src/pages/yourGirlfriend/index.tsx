import styles from '@/styles/YourGirlfriend.module.css'

export default function YourGirlFriend() {
  function returnYesOrNo() {
    const a = Math.floor(Math.random() * 2 ** 53)
    console.log(a)

    if (a === 1) return alert('응')
    else return alert('아니')
  }
  return (
    <main>
      <div className={styles.main}>
        <h1>이 웹사이트의 남친이 되어보세요! 확률은 2의 53승분의 1입니다.</h1>
        <button className={styles.button} onClick={returnYesOrNo}>
          내가 너의 남친이니?
        </button>
      </div>
    </main>
  )
}
