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
  feedbacks: Feedback[];
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

export type Feedback = {
  feedbackId: string;
  description: string;
  rating: number;
  ratingDate: string;
  productId: number;
  userId: string;
  user?: ApplicationUser;
}

export type ApplicationUser = {
  id: string;
  firstName: string;
  lastName: string;
  status: number;
  orderTables?: OrderTable[];
  shoppingCarts?: string;
  feedbacks?: Feedback[];
}

export type OrderTable = {
  orderTableId: number;
  userId: string;
  userPhoneNumber: string;
  userAddress: string;
  status: string;
  user?: ApplicationUser;
  OrderItems?: OrderItem[];
}

export type OrderItem = {
  orderItemId: number;
  orderTableId: number;
  productId: number;
  quantity: number;
  orderTable: OrderTable;
}

export type ShoppingCart = {
  shoppingCartId: number;
  userId: string;
  user?: ApplicationUser;
  cartItems?: CartItem[];
}

export type CartItem = {
  cartItemId: number;
  shoppingCartId: number;
  productId: number;
  quantity: number;
  shoppingCart: ShoppingCart;
}