import img1 from '../assets/product_1.png'
import img2_1 from '../assets/product_2_1.png'
import img2_2 from '../assets/product_2_2.png'
import img2_3 from '../assets/product_2_3.png'
import img2_4 from '../assets/product_2_4.png'
import img3 from '../assets/product_3.png'
import img4_1 from '../assets/product_4_1.png'
import img4_2 from '../assets/product_4_2.png'
import img4_3 from '../assets/product_4_3.png'
import img4_4 from '../assets/product_4_4.png'
import img5 from '../assets/product_5.png'
import img6 from '../assets/product_6.png'
import img7 from '../assets/product_7.png'
import img8 from '../assets/product_8.png'
import img9 from '../assets/product_9.png'
import img10 from '../assets/product_10.png'
import img11 from '../assets/product_11.png'
import img12 from '../assets/product_12.png'
import img13 from '../assets/product_13.png'
import img14 from '../assets/product_14.png'
import img15 from '../assets/product_15.png'
import img16 from '../assets/product_16.png'
import img17 from '../assets/product_17.png'
import img18 from '../assets/product_18.png'
import img19 from '../assets/product_19.png'
import img20 from '../assets/product_20.png'
import img21 from '../assets/product_21.png'
import img22 from '../assets/product_22.png'
import img23 from '../assets/product_23.png'
import img24 from '../assets/product_24.png'
import img25 from '../assets/product_25.png'

// Blogs
import blog1 from "../assets/blogs/blog1.png"
import blog2 from "../assets/blogs/blog2.png"
import blog3 from "../assets/blogs/blog3.png"
import blog4 from "../assets/blogs/blog4.png"


export const products = [
    {
        _id: "1",
        name: "Atasan Katun Elegan Kerah Bulat",
        description: "Atasan katun ringan ini cocok untuk acara kasual, dengan fit relaxed dan bahan yang tahan lama.",
        price: 150,
        image: [img1],
        category: "Wanita",
        subCategory: "Atasan",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        popular: false
    },
    {
        _id: "2",
        name: "Kaos Katun Premium Pria",
        description: "Kaos premium dengan kenyamanan luar biasa dan tekstur halus, cocok untuk dipakai sehari-hari.",
        price: 220,
        image: [img2_1, img2_2, img2_3, img2_4],
        category: "Pria",
        subCategory: "Pakaian Musim Dingin",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        popular: false,
        rating: 4.5,
    },
    {
        _id: "3",
        name: "Atasan Katun Kasual untuk Anak Perempuan",
        description: "Atasan katun lembut untuk anak perempuan, cocok untuk bermain aktif dan bersantai.",
        price: 200,
        image: [img3],
        category: "Anak-Anak",
        subCategory: "Atasan",
        sizes: ["S", "L", "XL"],
        date: 1716234545448,
        popular: true
    },
    {
        _id: "4",
        name: "Kaos Kasual Pria Klasik",
        description: "Kaos kasual dari katun yang nyaman, cocok untuk acara informal.",
        price: 180,
        image: [img4_1, img4_2, img4_3, img4_4],
        category: "Pria",
        subCategory: "Atasan",
        sizes: ["S", "M", "XXL"],
        date: 1716621345448,
        popular: false,
        rating: 4.5,
    },
    {
        _id: "5",
        name: "Kaos Dasar Stylish Wanita",
        description: "Kaos katun sehari-hari untuk wanita, menawarkan kesederhanaan dan kenyamanan.",
        price: 140,
        image: [img5],
        category: "Wanita",
        subCategory: "Pakaian Musim Dingin",
        sizes: ["M", "L", "XL"],
        date: 1716622345448,
        popular: false
    },
    {
        _id: "6",
        name: "Kaos Bergambar untuk Anak-Anak",
        description: "Kaos bergambar yang menyenangkan dan cerah, cocok untuk bermain di luar ruangan.",
        price: 160,
        image: [img6],
        category: "Pria",
        subCategory: "Pakaian Musim Dingin",
        sizes: ["XS", "S", "M"],
        date: 1716623345448,
        popular: true
    },
    {
        _id: "7",
        name: "Sweater Rajut Lembut Wanita",
        description: "Sweater rajutan ringan yang nyaman, cocok untuk layering di cuaca dingin.",
        price: 320,
        image: [img7],
        category: "Wanita",
        subCategory: "Bawahan",
        sizes: ["S", "M", "L", "XL"],
        date: 1716624345448,
        popular: false
    },
    {
        _id: "8",
        name: "Hoodie Kasual Pria",
        description: "Hoodie hangat dan nyaman dengan hood adjustable dan kantong depan.",
        price: 420,
        image: [img8],
        category: "Pria",
        subCategory: "Pakaian Musim Dingin",
        sizes: ["M", "L", "XL", "XXL"],
        date: 1716625345448,
        popular: true
    },
    {
        _id: "9",
        name: "Hoodie Nyaman Anak Perempuan",
        description: "Hoodie kasual yang dirancang untuk anak perempuan, dengan bahan lembut untuk kenyamanan sepanjang hari.",
        price: 230,
        image: [img9],
        category: "Anak-Anak",
        subCategory: "Atasan",
        sizes: ["S", "M", "L"],
        date: 1716626345448,
        popular: false
    },
    {
        _id: "10",
        name: "Celana Jogger Pria",
        description: "Celana jogger high-waisted yang cocok untuk dipakai kasual, dengan fit relaxed untuk kenyamanan tambahan.",
        price: 260,
        image: [img10],
        category: "Pria",
        subCategory: "Bawahan",
        sizes: ["S", "M", "L", "XL"],
        date: 1716627345448,
        popular: false
    },
    {
        _id: "11",
        name: "Jeans Slim Fit Klasik",
        description: "Jeans slim fit yang tahan lama dan stylish, cocok untuk outfit kasual dan formal.",
        price: 380,
        image: [img11],
        category: "Pria",
        subCategory: "Atasan",
        sizes: ["M", "L", "XL"],
        date: 1716628345448,
        popular: true
    },
    {
        _id: "12",
        name: "Celana Jogger Anak Laki-Laki",
        description: "Celana jogger nyaman untuk anak aktif, dengan pinggang elastis untuk memudahkan pemakaian.",
        price: 170,
        image: [img12],
        category: "Pria",
        subCategory: "Atasan",
        sizes: ["S", "M", "L"],
        date: 1716629345448,
        popular: false
    },
    {
        _id: "13",
        name: "Jeans Skinny Fit Wanita",
        description: "Jeans skinny fit trendy mid-rise, cocok dipadukan dengan atasan apa pun untuk tampilan chic.",
        price: 290,
        image: [img13],
        category: "Wanita",
        subCategory: "Atasan",
        sizes: ["S", "M", "L", "XL"],
        date: 1716630345448,
        popular: true
    },
    {
        _id: "14",
        name: "Celana Cargo Fungsional Anak-Anak",
        description: "Celana cargo kokoh dengan banyak kantong, cocok untuk petualangan kasual atau outdoor.",
        price: 290,
        image: [img14],
        category: "Anak-Anak",
        subCategory: "Atasan",
        sizes: ["M", "L", "XL", "XXL"],
        date: 1716631345448,
        popular: false
    },
    {
        _id: "15",
        name: "Celana Pendek Petualangan Anak Laki-Laki",
        description: "Celana pendek dengan pinggang elastis yang nyaman, dirancang untuk anak laki-laki aktif, cocok untuk bermain dan aktivitas luar ruangan.",
        price: 150,
        image: [img15],
        category: "Anak-Anak",
        subCategory: "Bawahan",
        sizes: ["XS", "S", "M"],
        date: 1716632345448,
        popular: true
    },
    {
        _id: "16",
        name: "Legging Motif Bunga",
        description: "Legging stretchy dengan motif bunga, sempurna untuk kenyamanan dan gaya.",
        price: 210,
        image: [img16],
        category: "Anak-Anak",
        subCategory: "Atasan",
        sizes: ["S", "M", "L"],
        date: 1716633345448,
        popular: true
    },
    {
        _id: "17",
        name: "Jaket Puffer Ringan Pria",
        description: "Jaket puffer stylish dan hangat, cocok untuk layering di cuaca dingin.",
        price: 490,
        image: [img17],
        category: "Pria",
        subCategory: "Bawahan",
        sizes: ["M", "L", "XL"],
        date: 1716634345448,
        popular: true
    },
    {
        _id: "18",
        name: "Trench Coat Klasik Wanita",
        description: "Trench coat timeless dengan fit tailored, cocok untuk berbagai kesempatan.",
        price: 610,
        image: [img18],
        category: "Anak-Anak",
        subCategory: "Atasan",
        sizes: ["S", "M", "L", "XL"],
        date: 1716635345448,
        popular: false
    },
    {
        _id: "19",
        name: "Parka Musim Dingin Anak Laki-Laki",
        description: "Parka musim dingin hangat dengan bahan tahan lama, dirancang untuk menahan suhu dingin.",
        price: 350,
        image: [img19],
        category: "Anak-Anak",
        subCategory: "Atasan",
        sizes: ["S", "M", "L"],
        date: 1716636345448,
        popular: false
    },
    {
        _id: "20",
        name: "Celana Jeans Klasik Anak Perempuan",
        description: "Jaket denim serbaguna untuk anak perempuan, cocok untuk layering di semua musim.",
        price: 260,
        image: [img20],
        category: "Wanita",
        subCategory: "Bawahan",
        sizes: ["S", "M", "L"],
        date: 1716637345448,
        popular: true
    },
    {
        _id: "21",
        name: "Sweater Campuran Wol Wanita",
        description: "Sweater campuran wol hangat ini memberikan kenyamanan dan tampilan stylish.",
        price: 360,
        image: [img21],
        category: "Wanita",
        subCategory: "Atasan",
        sizes: ["S", "M", "L", "XL"],
        date: 1716638345448,
        popular: true
    },
    {
        _id: "22",
        name: "Celana Jeans Kokoh Pria",
        description: "Jaket denim tahan lama dengan finish vintage, cocok untuk layering di semua musim.",
        price: 400,
        image: [img22],
        category: "Wanita",
        subCategory: "Bawahan",
        sizes: ["M", "L", "XL"],
        date: 1716639345448,
        popular: false
    },
    {
        _id: "23",
        name: "Hoodie Fleece Anak-Anak",
        description: "Hoodie fleece lembut dan nyaman, cocok untuk anak-anak aktif.",
        price: 190,
        image: [img23],
        category: "Anak-Anak",
        subCategory: "Atasan",
        sizes: ["S", "M", "L"],
        date: 1716640345448,
        popular: false
    },
    {
        _id: "24",
        name: "Jaket Moto Kulit Imitasi Anak-Anak",
        description: "Jaket kulit imitasi trendy dengan detail ritsleting yang elegan, menambah sentuhan edgy pada outfit apa pun.",
        price: 470,
        image: [img24],
        category: "Anak-Anak",
        subCategory: "Atasan",
        sizes: ["S", "M", "L"],
        date: 1716641345448,
        popular: true
    },
    {
        _id: "25",
        name: "Kaos Musim Dingin Anak-Anak",
        description: "Sarung tangan musim dingin lembut dengan lapisan fleece, dirancang untuk menjaga tangan tetap hangat.",
        price: 100,
        image: [img25],
        category: "Anak-Anak",
        subCategory: "Atasan",
        sizes: ["M", "L"],
        date: 1716642345448,
        popular: true
    }
]

export const blogs = [
    { title: "Tips Belanja Terbaik untuk Pembeli Cerdas", category: "Pria", image: blog1 },
    { title: "Tren Terbaru dalam Belanja Online 2024", category: "Wanita", image: blog2 },
    { title: "Cara Menemukan Penawaran Terbaik Online", category: "Anak-Anak", image: blog3 },
    { title: "Mengapa E-Commerce adalah Masa Depan Belanja", category: "Atasan", image: blog4 }
]