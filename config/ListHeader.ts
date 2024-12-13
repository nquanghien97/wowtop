interface ListHeaderType {
  id: number;
  title: string;
  path: string;
  children?: ListHeaderType[]
}

export const ListHeader: ListHeaderType[] = [
  {
    id: 1,
    title: 'Trang chủ',
    path: '/'
  },
  {
    id: 2,
    title: 'Giới thiệu',
    path: '/gioi-thieu',
  },
  {
    id: 3,
    title: 'Sản phẩm',
    path: '/san-pham'
  },
  {
    id: 4,
    title: 'Bản tin',
    path: '/tin-tuc',
    children: [
      {
        id: 41,
        title: 'Cách tăng chiều cao',
        path: '#'
      },
      {
        id: 42,
        title: 'Bài tập tăng chiều cao',
        path: '#'
      },
      {
        id: 43,
        title: 'Sữa tăng chiều cao',
        path: '#'
      }
    ]
  },
  {
    id: 5,
    title: 'Dự đoán chiều cao của con',
    path: '/du-doan-chieu-cao'
  },
  {
    id: 6,
    title: 'Đặt hàng',
    path: '/dat-hang'
  },
  // {
  //   id: 7,
  //   title: 'Tích điểm',
  //   path: '/tich-diem',
  //   children: [
  //     {
  //       id: 71,
  //       title: 'Thể lệ',
  //       path: '/tich-diem/the-le'
  //     }
  //   ]
  // }
]