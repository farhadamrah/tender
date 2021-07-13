import img1 from '../../../../assets/images/Carousel/carousel_photo-1.jpg';
import img2 from '../../../../assets/images/Carousel/carousel_photo-2.jpg';
import img3 from '../../../../assets/images/Carousel/carousel_photo-3.jpg';

const ServiceData = [
  {
    id: 1,
    title: 'İsmət Xaliqov',
    // image: '',
    header: 'Ev tikintisi üzrə tender elan olunur!!',
    about:
      'Kürsülü evdir Kürsü hazırdır qalıq hissəsi tikilməli. Tam təmir olunmaqı 11/30un-10a colden cole temir kursuden yuxari bütün təmir işləri olacaq .Ətrafli məlumat üçün əlaqə saxlayın.',
    images: [img1, img2, img3],
    feedbacks: {
      green: 0,
      red: 0,
      blue: 0,
    },
    location: 'Sumqayıt',
    price: 0,
    registrationDate: '2 ay',
    addedDate: '17.04.2021',
    deadLine: '17.05.2021',
    views: 785,
    order: 5,
    contact: {
      site: 'test.com',
      email: 'test@test.com',
      whatsapp: '012-345-67-89 ',
    },
  },
  {
    id: 2,
    title: 'Avantgarde Web studio',
    // image: '',
    header: 'Şəbəkə qurulmalıdır',
    about:
      'Anbar proqramının işələməsi üçün 3 kompüter arasında şəbəkə qurulmalıdır. Kompüterlərin 2-si Nərimanov rayonunda ofisdədir digəri isə 28 may ərazisində mağazada. Zəhmət olmasa qiymət təkliflərinizi yazın.',
    images: [img1, img2, img3],
    feedbacks: {
      green: 0,
      red: 1,
      blue: 0,
    },
    location: 'Bakı',
    price: 0,
    registrationDate: '2 il',
    addedDate: '10.02.2021',
    deadLine: '17.02.2021',
    views: 626,
    order: 2,
    contact: {
      site: 'https://www.webdizayn.az',
      email: 'office@webdizayn.az',
      whatsapp: '055-215-45-85 ',
    },
  },
  {
    id: 3,
    title: 'Buta Grup',
    // image: '',
    header: 'Buta Grup Dizayn hazirlanmasi üçün tender elan edilir',
    about: 'test',
    images: [img1, img2, img3],
    feedbacks: {
      green: 0,
      red: 0,
      blue: 0,
    },
    location: 'Bakı',
    price: 200,
    registrationDate: 2,
    addedDate: '30.01.2021',
    deadLine: '13.02.2021',
    views: 19,
    order: 9,
    contact: {
      site: 'test.com',
      email: 'test@test.com',
      whatsapp: '012-345-67-89 ',
    },
  },
];

export default ServiceData;
