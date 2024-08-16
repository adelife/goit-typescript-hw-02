import css from "./LoadMoreBtn.module.css";


interface LoadMoreBtnProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled: boolean;
}

const LoadMoreBtn = ({ children, onClick, disabled }: LoadMoreBtnProps) => {
  return (
    <button className={css.loadMoreBtn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;