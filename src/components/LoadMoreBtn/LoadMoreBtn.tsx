import css from "./LoadMoreBtn.module.css";


interface LoadMoreBtnProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled: Boolean;
}

const LoadMoreBtn = ({ children, onClick, disabled }: LoadMoreBtnProps) => {
  return (
    <button className={css.loadMoreBtn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;