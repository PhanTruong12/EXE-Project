// utils/fakeApi.ts
import { FakeSupType } from '../types';

// Hàm để thêm SUP vào "localStorage"
export const addSup = (supData: FakeSupType) => {
  const currentData = JSON.parse(localStorage.getItem('supList') || '[]');
  const updatedData = [...currentData, supData];
  localStorage.setItem('supList', JSON.stringify(updatedData));
  return { message: 'SUP đã được thêm thành công!' };
};

// Hàm lấy danh sách SUP từ "localStorage"
export const getSupList = (): FakeSupType[] => {
  return JSON.parse(localStorage.getItem('supList') || '[]');
};

// Hàm cập nhật một SUP trong "localStorage"
export const updateSup = (supId: string, updatedSup: Partial<FakeSupType>) => {
  const currentData = JSON.parse(localStorage.getItem('supList') || '[]');
  const updatedData = currentData.map((sup: FakeSupType) =>
    sup.supId === supId ? { ...sup, ...updatedSup } : sup
  );
  localStorage.setItem('supList', JSON.stringify(updatedData));
  return { message: 'SUP đã được cập nhật thành công!' };
};

// Hàm xóa một SUP khỏi "localStorage"
export const deleteSup = (supId: string) => {
  const currentData = JSON.parse(localStorage.getItem('supList') || '[]');
  const updatedData = currentData.filter((sup: FakeSupType) => sup.supId !== supId);
  localStorage.setItem('supList', JSON.stringify(updatedData));
  return { message: 'SUP đã được xóa thành công!' };
};
