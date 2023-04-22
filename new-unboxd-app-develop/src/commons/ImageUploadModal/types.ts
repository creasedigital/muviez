export type SelectImage = (url: string) => void;

export type ModalComponentProps = {
  show: boolean;
  selectImage: SelectImage;
  close: () => void;
};

export type Photo = {
  id: string;
  width: number;
  height: number;
  description: string | null;
  urls: { full: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
    links: {
      html: string;
    };
  };
};
