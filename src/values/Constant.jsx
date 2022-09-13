function createData(no, nama, alamat, bantuan, nokk, nik, tanggal) {
  return { no, nama, alamat, bantuan, nokk, nik, tanggal };
}

export const dataDummy = [
  createData(
    1,
    "Reski Arwah",
    "Tanuntung",
    "KIS",
    "55555555",
    "730205201199002",
    "09/07/2022"
  ),
];

export const constantKelengkapanBerkas = [
  [
    { label: "Kartu Keluarga", name: "kartu_keluarga" },
    { label: "Kartu KTP", name: "ktp" },
    { label: "KKS", name: "kks" },
  ],
  [
    { label: "KIS", name: "kis" },
    { label: "SKTM", name: "sktm" },
    { label: "Domisili", name: "domisili" },
  ],
];

export const constantJenisLayanan = ["Usulan KIS", "SKTM", "PKH", "BPNT"];

export const constantPisat = ["Peserta", "Suami", "Istri", "Anak", "Tambahan"];

export const constantStatusKawin = ["TD", "Belum", "Kawin", "Cerai"];

export const constantKecamatan = [
  "Bejeng",
  "Bajeng Barat",
  "Barombong",
  "Biringbulu",
  "bontolempangan",
  "Bontomarannu",
  "Bontonompo",
  "Bontonompo Selatan",
  "Bungaya",
  "Manuju",
  "Pallangga",
  "Parangloe",
  "Parigi",
  "Patalassang",
  "Somba Opu",
  "Tinggimoncong",
  "Tompobulu",
  "Tombolo Pao",
];

export const constantKelurahan = [
  [
    "Bone",
    "Bontosunggu",
    "Lempangang",
    "Maccinibaji",
    "Maradekaya",
    "PaBentenganng",
    "Panciro",
    "Pannyangkalang",
    "Paraikatte",
    "Tangkebajeng",
    "Kalebajeng",
    "Limbung",
    "Mata Allo",
    "Tubajeng",
  ],
  [
    "Bontomanai",
    "Borimatangkasa",
    "gentungang",
    "Kalemandalle",
    "Manjalling",
    "Tanabangka",
  ],
  [
    "Biringala",
    "Kanjilo",
    "Moncobalang",
    "Tamannyeleng",
    "Tinggimae",
    "Benteng Somba Opi",
    "Lembang parang",
  ],
  [
    "Batumalonro",
    "Baturappe",
    "Berutallasa",
    "Borimasunggu",
    "julukanaya",
    "Lembangloe",
    "parangloe",
    "pencong",
    "taring",
    "Lauwa",
    "Tonrorita",
  ],
  [
    "Bontolempangan",
    "Bontoloe",
    "Bontotangga",
    "Julumate'ne",
    "Lassa-lassa",
    "Pa'ladingang",
    "Paranglompoa",
    "Ulujangang",
  ],
  [
    "Bili-bili",
    "Mata Allo",
    "Nirannuang",
    "Pakatto",
    "Romangloe",
    "Sokkolia",
    "Bontomanai",
    "Borongloe",
    "Romang Lompoa",
  ],
  [
    "Barembeng",
    "Bategulung",
    "Bontobiraeng",
    "Selatan",
    "bontolangkasa utara",
    "Bulogading",
    "Kalebarembeng",
    "Katangka",
    "Manjapai",
    "Romanglasa",
    "Bontonompo",
    "Kalaserena",
    "Tamallayang",
  ],
  [
    "Bontosunggu",
    "Jipang",
    "Pabundukang",
    "Salakangki",
    "Salajo",
    "Sengka",
    "Tanrara",
    "Tindang",
    "Bontoramba",
  ],
  [
    "Bissoloro",
    "Bontomanai",
    "Buakkang",
    "Mangempang",
    "Rannaloe",
    "Jenebatu",
    "Sapaya",
  ],
  [
    "Bilalang",
    "Manuju",
    "Moncongloe",
    "Pattallikang",
    "Tamalatea",
    "Tana Karaeng",
    "Tassese",
  ],
  [
    "Bontoala",
    "Bontoramba",
    "Bungaejaya",
    "Jenetallasa",
    "Julubori",
    "Julukanaya",
    "Julupa'mai",
    "Kampili",
    "Pallangga",
    "Panakkukang",
    "Taeng",
    "Toddotoa",
    "Mangalli",
    "Pangkabinanga",
    "Parangbanoa",
    "Tetebatu",
  ],
  [
    "Belabori",
    "Belapunranga",
    "Bontokassi",
    "Barisallo",
    "Lonjoboko",
    "Bontoparang",
    "Lanna",
  ],
  ["Bilanrengi", "Jonjo", "Majannang", "Manimbahoi", "Sicini"],
  [
    "Borongpalala",
    "Jenemadinging",
    "Pacelakkang",
    "Pallantikang",
    "Panaikang",
    "Pattalassang",
    "Sunggumanai",
    "Timbuseng",
  ],
  [
    "Batangkaluku",
    "Bonto-bontoa",
    "Bontoramba",
    "Kalegowa",
    "Katangka",
    "Mawang",
    "Paccinongang",
    "Pandang-pandang",
    "Romangpolong",
    "Samata",
    "Sungguminasa",
    "Tamarunang",
    "Tombolo",
    "Tompobalang",
  ],
  [
    "Parigi",
    "Bonto Lerung",
    "Bulutana",
    "Gantarang",
    "Garassing",
    "Malino",
    "Pattapang",
  ],
  [
    "Bontobuddung",
    "Datara",
    "Garing",
    "Rappoala",
    "Rappolemba",
    "Tanete",
    "Cikoro",
    "Malakaji",
  ],
  [
    "Balassuka",
    "Bolaromang",
    "Erelembang",
    "Kanreapia",
    "Mamampang",
    "Pao",
    "Tabinjai",
    "Tonasa",
    "Tamaona",
  ],
];
export const constantJenisKelamin = ["Laki - Laki", "Perempuan"];
