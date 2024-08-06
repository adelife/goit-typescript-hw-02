export type Pictures = {
    id: string;
    description: string;
    alt: string;
    urls: {
      small: string;
      regular: string;
    };
    likes: number;
    user: {
      name: string;
    };
  };
  
  export type ModalWindow = {
    // urls: string;
    description: string;
    urls: {
        small: string;
        regular: string;
      };
  };
  
  export type Data = {
    total: number;
    total_pages: number;
    results: Pictures[];
  };