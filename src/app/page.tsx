import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>임시 콘텐츠 제목</h1>
        <p>이곳은 임시 콘텐츠입니다. 내용을 수정하여 사용하세요.</p>
        <ol>
          <li>첫 번째 임시 항목입니다.</li>
          <li>두 번째 임시 항목입니다.</li>
        </ol>

        <div className={styles.ctas}>
          <a className={styles.primary} href="#" target="_blank" rel="noopener noreferrer">
            <span>임시 버튼 1</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.secondary}>
            <span>임시 버튼 2</span>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <span>임시 링크 1</span>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <span>임시 링크 2</span>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <span>임시 링크 3</span>
        </a>
      </footer>
    </div>
  );
}
