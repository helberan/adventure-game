interface ModalProps {
  content: string;
}

export const Modal = ({ content }: ModalProps) => {
  return (
    <div className="modal">
      <p>{content}</p>
    </div>
  );
};
