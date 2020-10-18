import {
  ADD_PRODUCT,
  COUNT_PRODUCT,
  DELETE_PRODUCT,
  DETAIL_PRODUCT,
} from "../constants";

const initialState = {
  sanPhamChiTiet: {
    maSP: "1",
    linkAnh: "./img/applephone.jpg",
    manHinh: `"OLED, 6.5", 1242 x 2688 Pixels`,
    heDieuHanh: "Android 9.0 (Pie)",
    camTruoc: "20 MP",
    camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4GB",
    rom: "64GB",
  },
  danhSachGioHang: [],
  danhSachSanPham: [
    {
      maSP: "1",
      giaThanh: 22000000,
      tenSP: "Iphone XS Max",
      linkAnh: "./img/applephone.jpg",
      manHinh: `"OLED, 6.5", 1242 x 2688 Pixels`,
      heDieuHanh: "iOS 14.0 ",
      camTruoc: "20 MP",
      camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4GB",
      rom: "64GB",
    },
    {
      maSP: "2",
      giaThanh: 12000000,
      tenSP: "Meizu 16Xs",
      linkAnh: "./img/meizuphone.jpg",
      manHinh: `"AMOLED, FHD+ 2232 x 1080 pixels`,
      heDieuHanh: "Android 9.0 (Pie)",
      camTruoc: "20 MP",
      camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4GB",
      rom: "64GB",
    },
    {
      maSP: "3",
      giaThanh: 15000000,
      tenSP: "VinSmart Live",
      linkAnh: "./img/vsphone.jpg",
      manHinh: `"AMOLED, 6.2", Full HD+`,
      heDieuHanh: "Android 9.0 (Pie)",
      camTruoc: "20 MP",
      camSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4GB",
      rom: "64GB",
    },
  ],
};
const gioHangReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case DETAIL_PRODUCT: {
      state.sanPhamChiTiet = actions.payload;
      return { ...state };
    }

    case ADD_PRODUCT: {
      let danhSachGioHang = [...state.danhSachGioHang];
      let sanPham = actions.payload;
      let index = danhSachGioHang.findIndex((item) => {
        return item.maSP === sanPham.maSP;
      });

      if (index !== -1) {
        const product = { ...danhSachGioHang[index] };
        product.soLuong++;
        danhSachGioHang[index] = product;
      } else {
        sanPham.soLuong = 1;
        danhSachGioHang = [...danhSachGioHang, sanPham];
      }

      state.danhSachGioHang = danhSachGioHang;
      return { ...state };
    }

    case DELETE_PRODUCT: {
      let danhSachGioHang = state.danhSachGioHang.filter(
        (item) => actions.payload.maSP !== item.maSP
      );
      state.danhSachGioHang = danhSachGioHang;
      return { ...state };
    }

    case COUNT_PRODUCT: {
      let gioHangCapNhat = [...state.danhSachGioHang];
      let index = state.danhSachGioHang.findIndex((item) => {
        return item.maSP === actions.payload.maSP;
      });

      const product = { ...state.danhSachGioHang[index] };

      if (actions.status) {
        product.soLuong++;
      } else {
        if (product.soLuong > 1) {
          product.soLuong--;
        }
      }

      gioHangCapNhat[index] = product;

      state.danhSachGioHang = gioHangCapNhat;
      return { ...state };
    }

    default:
      break;
  }
  return state;
};

export default gioHangReducer;
