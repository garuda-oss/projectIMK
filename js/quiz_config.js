var id = new Array();
var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var exp = new Array();
var nexp = new Array();

nexp[0]="Ergonomi adalah ilmu yang mempelajari interaksi antara manusia dengan elemen-elemen lain dalam suatu sistem salah satunya mempelajari tentang kemampuan fisik dari pengguna.";
nexp[1]="Faktor keberhasilan sistem dapat dilihat dari tiga hal yaitu useful (berguna), used (digunakan) dan usable (dapat digunakan). Dapat dikerjakan dengan mudah dan alamiah, tanpa adanya bahaya kesalahan merupakan faktor keberhasilan usable.";
nexp[2]="Tahap pemrosesan informasi yaitu, menangkap informasi, perbandingan, pengambilan keputusan dan aksi";
nexp[3]="Fitt's Law merupakan hukum yang menyatakan bahwa waktu reaksi berbanding lurus dengan jarak";
nexp[4]="Pengukuran daya guna (usability) dapat dilakukan dengan tiga faktor yaitu efektivitas, efisiensi, dan kepuasan subjektif";
nexp[5]="Pembuatan laporan keuangan lebih efisien dilakukan di Ms.Excel (sdh tersedia rumus)";
nexp[6]="Ketelitian dan kelengkapan di mana user dapat mencapai tujuan merupakan atribut daya guna efektifitas";
nexp[7]="Memastikan design dapat dipahami user dan konsisten serta fleksible merupakan fase Design";
nexp[8]="Konsistensi dalam suatu sistem dalam prinsip CRAP termasuk dalam prinsip Repetition.";
nexp[9]="Membantu pengguna untuk fokus pada bagian yang penting, yang akan menuntun pengguna untuk mengetahui apa yang harus dilakukan, merupakan prinsip Contrast";

exp[0]="nol";
exp[1]="satu";
exp[2]="dua";
exp[3]="tiga";
exp[4]="empat";
exp[5]="lima";
exp[6]="enam";
exp[7]="tujuh";
exp[8]="delapan";
exp[9]="sembilan";

id[0]="0";
questions[0] = "Ilmu yang menunjang interaksi manusia komputer yang digunakan untuk mempelajari kemampuan fisik dari pengguna (manusia) adalah ...";
choices[0] = new Array();
choices[0][0] = "Sosiologi";
choices[0][1] = "Ergonomi";
choices[0][2] = "Astrologi";
choices[0][3] = "Psikologi";
choices[0][4] = "Antropologi";
answers[0] = choices[0][1];

id[1]="1";
questions[1] = "Dapat dikerjakan dengan mudah dan alamiah, tanpa adanya bahaya kesalahan merupakan faktor keberhasilan sistem, yaitu ...";
choices[1] = new Array();
choices[1][0] = "Usability";
choices[1][1] = "Used";
choices[1][2] = "Usefull";
choices[1][3] = "Usable";
choices[1][4] = "Usage";
answers[1] = choices[1][3];

id[2]="2";
questions[2] = "Dibawah ini yang tidak termasuk dalam tahap pemrosesan informasi adalah ...";
choices[2] = new Array();
choices[2][0] = "Aksi";
choices[2][1] = "Reaksi";
choices[2][2] = "Perbandingan";
choices[2][3] = "Menangkap informasi";
choices[2][4] = "Pengambilan keputusan";
answers[2] = choices[2][1];

id[3]="3";
questions[3] = "Fitt’s Law menyatakan bahwa ...";
choices[3] = new Array();
choices[3][0] = "Waktu reaksi berbanding lurus dengan jarak";
choices[3][1] = "Waktu reaksi berbanding lurus dengan ukuran";
choices[3][2] = "Waktu reaksi berbanding terbalik dengan jarak";
choices[3][3] = "Waktu reaksi merupakan perkalian antara jarak dengan ukuran";
choices[3][4] = "Dibutuhkan tiga konstanta untuk menentukan waktu reaksi";
answers[3] = choices[3][0];

id[4]="4";
questions[4] = "Daya guna (usability) merupakan salah satu faktor untuk mengukur sejauh mana penerimaan pengguna terhadap sistem. Pengukuran dapat dilakukan dengan tiga hal, yaitu ...";
choices[4] = new Array();
choices[4][0] = "Efisiensi, relevansi, konsistensi";
choices[4][1] = "Efektifitas, konsistensi, kepuasan";
choices[4][2] = "Kepuasan, relevansi, konsistensi";
choices[4][3] = "Efektifitas, efisiensi, konsistensi";
choices[4][4] = "Efektifitas, efisiensi, kepuasan";
answers[4] = choices[4][4];

id[5]="5";
questions[5] = "Pembuatan laporan keuangan suatu perusahaan dalam bentuk tabel di microsoft office bisa dilakukan dengan menggunakan microsoft word dan microsoft excel. Rosi membuat laporan keuangan perusahaan dengan menggunakan microsoft word, maka Rosi tidak memenuhi atribut daya guna ...";
choices[5] = new Array();
choices[5][0] = "Learnability";
choices[5][1] = "Efektifitas";
choices[5][2] = "Efisiensi";
choices[5][3] = "Memorability";
choices[5][4] = "Error ";
answers[5] = choices[5][2];

id[6]="6";
questions[6] = "Ketelitian dan kelengkapan di mana user dapat mencapai tujuan merupakan atribut daya guna ...";
choices[6] = new Array();
choices[6][0] = "Learnability";
choices[6][1] = "Efektifitas";
choices[6][2] = "Efisiensi";
choices[6][3] = "Memorability";
choices[6][4] = "Error";
answers[6] = choices[6][1];

id[7]="7";
questions[7] = "Usability life cycle terdiri dari tiga fase. Memastikan design dapat dipahami user dan konsisten serta fleksible merupakan fase ...";
choices[7] = new Array();
choices[7][0] = "Interview";
choices[7][1] = "Pre design";
choices[7][2] = "Modeling ";
choices[7][3] = "Design";
choices[7][4] = "Post design";
answers[7] = choices[7][3];

id[8]="8";
questions[8] = "Untuk meningkatkan usability, digunakan prinsip CRAP. Konsistensi dalam suatu sistem pada prinsip CRAP termasuk dalam prinsip ...";
choices[8] = new Array();
choices[8][0] = "Consistency";
choices[8][1] = "Contrast";
choices[8][2] = "Repetition";
choices[8][3] = "Alignment";
choices[8][4] = "Proximity";
answers[8] = choices[8][2];

id[9]="9";
questions[9] = "Membantu pengguna untuk fokus pada bagian yang penting, yang akan menuntun pengguna untuk mengetahui apa yang harus dilakukan, merupakan prinsip CRAP, yaitu ...";
choices[9] = new Array();
choices[9][0] = "Consistency";
choices[9][1] = "Contrast";
choices[9][2] = "Repetition";
choices[9][3] = "Alignment";
choices[9][4] = "Proximity";
answers[9] = choices[9][1];


response[0] = "Excellent! Top marks!";

response[1] = "Excellent! Try again to get 100%!"

response[2] = "Well done! That is a good score, can you do better?";

response[3] = "Nice one! You got more than half of the questions right, can you do better?";

response[4] = "You got some questions right, you can do better!";

response[5] = "You didn't do too well, why not try again!?";

response[6] = "That was pretty poor!  Try again to improve!";

response[7] = "Oops, try again after you take some lesson!";