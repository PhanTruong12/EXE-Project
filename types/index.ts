export type VotesType = {
  count: number;
  value: number;
}

export type PunctuationType = {
  countOpinions: number;
  punctuation: number;
  votes: VotesType[]
}

export type ReviewType = {
  name: string;
  avatar: string;
  description: string;
  punctuation: number;
}

export type ProductType = {
  productId: string;
  productName: string;
  description: string;
  thumb: string;
  unitPrice: number;
  count: number;
  productImages: ProductImageType[];
  discount?: string;
  currentPrice: number;
  punctuation: PunctuationType;
  reviews: ReviewType[];
}

export type ProductTypeList = {
  productId: string;
  productName: string;
  productImages: ProductImageType[];
  discount?: string;
  unitPrice: number;
  currentPrice?: number;
  
}

export type ProductImageType = {
  imageId: string;
  productId: string;
  imageName: string;
  imageData: string;
}

export type ProductStoreType = {
  productId: string;
  productName: string;
  thumb: string;
  unitPrice: number;
  count: number;
  hireDate: string;
  startTime: string;
  endTime: string;
};

export type GtagEventType = {
  action: string;
  category: string; 
  label: string;
  value: string
}
export type FakeSupType = {
  supId: string;                 // ID giả của SUP
  supName: string;               // Tên SUP
  description: string;           // Mô tả SUP
  unitPrice: number;             // Giá thuê mỗi ngày
  available: boolean;            // Trạng thái còn trống (true: còn, false: hết)
  images: string[];              // Các URL hình ảnh của SUP
  hireDate?: string;             
};

export type FakeSupListType = FakeSupType[]; // Danh sách SUP giả
