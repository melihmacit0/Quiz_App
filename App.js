import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';

const questions = [
  {
    question: 'On sekizinci yüzyılın ikinci yarısında Avrupa’da başlayan Sanayi İnkılabı, önemli gelişmelere neden olmuştur. Sanayileşen devletler, kendi endüstrileri için ham madde sağlayabilecekleri ve aynı zamanda yeni ürünleri satabilecekleri ülkeler aramışlardır. Bunun sonucunda eskiden beri ekonomik ilişkileri bulunan, siyasi ve askerî açıdan zayıflamış Osmanlı Devleti’ne yönelmişlerdir. Sanayi İnkılabı’nı gerçekleştirememiş bu devleti; geniş toprakları, nüfus yoğunluğu, sahip olduğu yer altı ve yer üstü kaynaklarıyla ham madde alanı ve pazar olarak görmüşlerdir. Bu bilgiye göre, aşağıdaki yargılardan hangisine ulaşılabilir?',
    options: ['Sanayi İnkılabı ’nın etkileri, Avrupa’daki ülkeler ile sınırlı kalmıştır', 'Osmanlı Devleti, jeopolitik konumu nedeniyle güçlü bir ekonomiye sahip olmuştur', 'Osmanlı ülkesi, güçlü devletlerin sömürgecilik faaliyetlerine açık hâle gelmiştir', 'Sanayi İnkılabı, Osmanlıdaki ham madde kaynakları sayesinde gerçekleşmiştir'],
    correctAnswer: 'Osmanlı ülkesi, güçlü devletlerin sömürgecilik faaliyetlerine açık hâle gelmiştir',
    image: require('./images/1.png')
  },
  {
    question: 'XIX. yüzyılda Osmanlı Devleti, Avrupalı devletlerden yüksek faizle borç alarak giderleri karşılamaya çalıştı. Devlet, otuz yıl içinde borçlarının faizini ödeyemez hâle gelerek iflas etti. Bunun üzerine alacaklı devletler, bir araya gelerek Düyun-u Umumiye adında uluslararası bir teşkilat kurdular. Osmanlı gelir kaynaklarının büyük bir kısmına el koyan bu teşkilat, vergileri toplayarak alacaklı devletler arasında paylaştırıyordu. Buna göre Osmanlı Devleti ile ilgili aşağıdaki yargılardan hangisine ulaşılabilir?',
    options: ['Büyük toprak kaybına uğramıştır', 'Avrupalı devletlere ilk kez kapitülasyonlar vermiştir', 'Vergi kaynaklarıyla tüm borçlarını ödemiştir', 'Ekonomik bağımsızlığını kaybetmiştir'],
    correctAnswer: 'Ekonomik bağımsızlığını kaybetmiştir',
    image: require('./images/2.png')
  },
  {
    question: 'Osmanlı Devleti’nin sınırları içinde Türklerle beraber çok farklı milletler bulunuyordu. Atatürk’ün çocukluk dönemini geçirdiği Selanik şehrinde de Türklerle birlikte Rum, Bulgar, Sırp, Yahudi ve Ermeniler yaşamaktaydı. Bu nedenle dil, inançlar, gelenek ve görenekler de farklılık gösteriyordu. Yüzyıllarca uyum içinde yaşayan bu farklı kültürler, Fransız İhtilali’nin etkisiyle çatışma ortamı içine sürüklenmişlerdir. Bu bilgilere göre, Atatürk’ün çocukluğunun geçtiği dönemde Selanik şehrinin sosyal ve kültürel yapısına ilişkin olarak aşağıdakilerden hangisi söylenemez?',
    options: ['Çok uluslu bir yapıya sahiptir', 'Zengin bir kültürel yapı vardır', 'Milliyetçilik düşüncesi etkili olmuştur', 'Ticari hayata gayrimüslimler hâkimdir'],
    correctAnswer: 'Ticari hayata gayrimüslimler hâkimdir',
    image: require('./images/3.png')
  },
  {
    question: 'Atatürk’ün çocukluk dönemini yaşadığı Selanik’in taşıdığı özelliklerden bazıları şunlardır: I. Farklı milletler bir arada yaşamıştır. II. Önemli fikir akımlarının etkisindedir. III. Zengin bir basın-yayın hayatı vardır. IV. Çok uluslu bir yapıya sahiptir. Bu bilgilerin sosyal ve kültürel özellikler olarak sınıflandırılması aşağıdakilerin hangisinde doğru yapılmıştır? (Sosyal = S, Kültürel = K)',
    options: ['S: I ve II  K:III ve IV', 'S: I ve IV  K:II ve III', 'S: II ve III   K:I ve IV', 'S: II ve IV   K:I ve III'],
    correctAnswer: 'S: I ve IV  K:II ve III',
    image: require('./images/4.png')
  },
  {
    question: 'Sömürge arayışı içindeki İtalya’nın, Osmanlı toprağı Trablusgarp’a saldırması üzerine Mustafa Kemal, bir grup genç Osmanlı subayı ile birlikte Trablusgarp’a gitti. Orada yerli halkı İtalyanlara karşı teşkilatlandırıp direnişe geçirerek, Derne ve Tobruk başarılarını kazandı. Mustafa Kemal’in üstlendiği bu görev, Millî Mücadele yıllarındaki çalışmalarına, aşağıdakilerden hangisi bakımında katkı sağlamış olabilir??',
    options: ['İnkılap yapma', 'Kanun çıkarma', 'Milleti örgütleme', 'Misakımillî’yi hazırlama'],
    correctAnswer: 'Milleti örgütleme',
    image: require('./images/5.png')
  },
  {
    question: 'Avrupa, 20. yüzyılın başında İtilaf ve İttifak Devletleri olarak iki gruba bölünmüştü. Savaş esnasında grup dışı kalmanın tehlikeli olabileceğini düşünen Osmanlı Devleti, İngiltere ile ittifak yapmak istedi. İngiltere ise müttefiki Rusya’nın Osmanlı toprakları üzerindeki yayılmacı politikası nedeniyle bu ittifak isteğini kabul etmedi. Bu gelişmeler üzerine Osmanlı devlet adamlarından Enver Paşa ve arkadaşları, Almanya’nın savaşı kazanacağını düşünerek Almanya ile ittifak arayışına girdiler. Sonuçta Osmanlı Devleti, Almanya ile gizli bir anlaşma yaptı. Parçaya göre aşağıdakilerden hangisi, Osmanlı Devleti’nin I. Dünya Savaşı’nda Almanya’nın yanında yer alma sebeplerinden biri değildir?',
    options: ['Almanya’nın savaşı kazanacağına olan inanç', 'Osmanlı Devleti’nin kaybettiği toprakları geri alma düşüncesi', 'Savaş sırasında Osmanlı Devleti’nin yalnız kalma korkusu', 'Rusya’nın Osmanlı Devleti’nin topraklarını parçalamak istemesi'],
    correctAnswer: 'Osmanlı Devleti’nin kaybettiği toprakları geri alma düşüncesi',
    image: require('./images/6.png')
  },
  {
    question: 'Mustafa Kemal, öğrenim hayatı boyunca sadece okul çalışmaları ile yetinmemiştir. Okul dışında Fransızcasını geliştirmeye çalışmış, matematiğe ve tarih derslerine ilgi duymuştur. Bilgisini genişletmek, kültür seviyesini yükseltmek için çevresinde çıkan yayınları takip etmiştir. Aynı zamanda Fransız aydınları J.J. Rousseau, Voltaire ve Montesquieu’nun eserlerini okumuştur. Böylece yeni tanıştığı milliyetçilik, eşitlik, özgürlük ve ulusal egemenlik kavramlarını öğrenmiştir. Çağdaş Türkiye’yi kurma çalışmalarında bu fikirlerden ilham almıştır.  Bu bilgilerden Mustafa Kemal’in;  I. Barışsever olması, II. Farklılıklara ve yeniliğe açıklığı, III. Öğrendiklerini uygulamaya çalışması, IV. Açık sözlülüğü özelliklerinden hangileri çıkarılabilir?',
    options: ['I ve II', 'II ve III', 'I ve IV', 'III ve IV'],
    correctAnswer: 'II ve III',
    image: require('./images/7.png')
  },
  {
    question: '29 Ekim 1915 tarihli Tasvir-i Efkâr gazetesi, Mustafa Kemal’in Çanakkale Kara Savaşlarındaki başarılarını şöyle haber yapmıştır: “Çanakkale Kara Savaşlarında olağanüstü yararlılıkları görülen ve savunmadaki güç ve ustalığı ile hakkıyla şan ve şeref kazanarak boğazları ve hilafet makamını (İstanbul) kurtaran kumandanlarımızdan, doğuştan kahraman, mümtaz.... Albay Mustafa Kemal Beyefendi.” Bu gazete haberinde Mustafa Kemal’in, aşağıdaki özelliklerinden hangisi ön plana çıkarılmıştır?',
    options: ['Çok yönlülüğü', 'Birleştirme gücü', 'İleri görüşlülüğü', 'Askerlik yeteneği'],
    correctAnswer: 'Askerlik yeteneği',
    image: require('./images/8.png')
  },
  {
    question: 'Mondros Ateşkes Antlaşması’ndan sonra İtilaf Devletleri yurdumuzu işgal etmeye başladılar. İşgaller karşısında hiçbir harekette bulunmayan İstanbul Hükûmeti, ülkeyi içinde bulunduğu kötü durumdan kurtarmaya yönelik çalışmalarda da bulunmuyordu. İstanbul Hükûmeti, Anadolu’ya sadece nasihat heyetleri göndererek halkı, işgaller karşısında sükûnete davet ediyor, İtilaf Devletleri’ne silahla karşı konulmamasını istiyordu. Buna göre, İstanbul Hükûmetinin işgaller karşısında izlediği politika; I. mücadelecidir. II. duyarsızdır. III. çekingendir. IV. teslimiyetçidir. V. milliyetçidir. Yargılarından hangileriyle açıklanabilir?',
    options: ['I-II-III', 'II-III-IV', 'I-III-V', 'I-II-IV-V'],
    correctAnswer: 'II-III-IV',
    image: require('./images/9.png')
  },
  {
    question: 'Yukarıdaki oklarla yandaki hedefleri vurmak isteyen okçu çocuğun, aşağıdakilerin hangisiyle isabetli atış yaptığı söylenebilir?',
    options: ['K: 3, L: 1, M: 4, N: 2', 'K: 2, L: 3, M: 1, N: 4', 'K: 1, L: 3, M: 4, N: 2', 'K: 1, L: 4, M: 3, N: 2'],
    correctAnswer: 'K: 1, L: 4, M: 3, N: 2',
    image: require('./images/10.png')
  },
  {
    question: 'Bu konuşmaya göre Mustafa Kemal’in amacı aşağıdakilerden hangisi olabilir?',
    options: ['Saltanatı kaldırmak', 'Kalıcı barış sağlamak', 'Cumhuriyeti ilan etmek', 'Millî bilinci uyandırmak'],
    correctAnswer: 'Millî bilinci uyandırmak',
    image: require('./images/11.png')
  },
  {
    question: 'Verilen görselde, 17 Mayıs 1919 tarihli bir gazetenin, Trabzon’daki Rum matbaasının bir Türk gazetesini basmadığı ile ilgili haberini okudunuz. Rum matbaası, bu uygulaması ile aşağıdakilerden hangisini önlemeyi amaçlamıştır?',
    options: ['Millî ekonominin gelişmesini', 'Millî egemenliğin kurulmasını', 'Millî duyguların harekete geçmesini', 'Millî kültürün korunması çalışmalarını'],
    correctAnswer: 'Millî duyguların harekete geçmesini',
    image: require('./images/12.png')
  },
  {
    question: 'Bina henüz tamamlanmamıştı. Çatıyı döşemeye kiremit yetmemişti. Ankaralılar kendi çatılarından kucak kucak kiremit taşıyarak çatıyı kapattılar. Bu manzara çok anlamlıydı. Meclis’te mebusların oturacağı sıra bile yoktu. Ankara Muallim Mektebinden sıralar getirildi. O tarihte Ankara’da elektrik de yoktu. Kahvehanelerin birinden alınan petrol lambası asılarak aydınlatma meselesi halledildi. Sokağa bakan ilk oda, başkanlık odası yapıldı. Daha sonra meşhur hattat Hulûsi Efendi’nin yazdığı “Hâkimiyet milletindir.” tabelası kürsünün arkasına asıldı. Bu metinden, açılış hazırlıklarının anlatıldığı TBMM ile ilgili aşağıdakilerin hangisine ulaşılamaz?',
    options: ['İmkânsızlıklar içinde açıldığına', 'Millet egemenliğini savunduğuna', 'Güçler birliği ilkesini benimsediğine', 'Ankara halkı tarafından desteklendiğine'],
    correctAnswer: 'Güçler birliği ilkesini benimsediğine',
    image: require('./images/13.png')
  },
  {
    question: 'Misakımillî’nin bazı maddeleri şunlardır: • Türk ve Müslüman halkın çoğunluğunun bulunduğu yerler, birbirinden ayrılamaz bir bütündür. • Azınlıkların hakları, komşu ülkelerdeki Müslümanların da aynı haklardan yararlanmaları şartıyla kabul edilecek ve sağlanacaktır. • Millî ve ekonomik gelişmemizi sağlamak amacıyla siyasi, adli ve mali gelişmemizi engelleyen bütün kapitülasyonlar kaldırılacaktır. Verilen bilgilerde, aşağıdakilerden hangisini amaçlayan bir karar yoktur?',
    options: ['Bağımsızlığı', 'Uluslararası eşitliği', 'Ulusal egemenliği', 'Vatanın bütünlüğünü'],
    correctAnswer: 'Ulusal egemenliği',
    image: require('./images/14.png')
  },
  {
    question: '“Siyasi, adli ve mali istiklalimizi yok etmeye ve sonuç olarak yaşama hakkımızı inkâra ve ortadan kaldırmaya yönelik olan Sevr Antlaşması bizce mevcut değildir.” Mustafa Kemal ATATÜRK. Bu vecizeye göre aşağıdakilerden hangisi, Mustafa Kemal’in Sevr Antlaşması’nı tanımayışının nedeni değildir?',
    options: ['Kapitülasyonlara yer vermesi', 'Hukuki dayanaktan yoksun oluşu', 'Bağımsızlığımıza aykırı olması', 'Türk halkının yaşama hakkını elinden alması'],
    correctAnswer: 'Hukuki dayanaktan yoksun oluşu',
    image: require('./images/15.png')
  },
  {
    question: 'Çanakkale Zaferi; İtilaf Devletleri’nin savaşı kısa sürede kazanma planlarını suya düşürmüştür. Bu zaferle İtilaf Devletleri’nin Boğazları ele geçirmesi ve İstanbul’u işgali önlenmiştir. Hindistan’da İngiliz karşıtı gösteriler düzenlenmiş, müttefiklerinden yardım alamayan Rusya’da Bolşevik İhtilali gerçekleşmiş ve yeni yönetim savaştan çekilmiştir. Çanakkale Savaşları’ndan sonra Bulgaristan, İttifak Devletleri’nin yanında savaşa katılmıştır. Böylece Osmanlı Devleti ile müttefikleri arasında kara bağlantısı kurulmuştur. Bu bilgilere göre, I.Birinci Dünya Savaşı’nın süresinin uzaması II.İtilaf Devletleri’nin müttefik kaybına uğraması III.Osmanlı Devleti’nin savaş dışı kalması IV.İngiltere’nin sömürgelerini kaybetmesi sonuçlarından hangilerine Çanakkale Savaşları’nın neden olduğu söylenebilir?',
    options: ['I ve II', 'I ve III', 'II ve IV', 'III ve IV'],
    correctAnswer: 'I ve II',
    image: require('./images/16.png')
  },
  {
    question: 'Sivas Kongresi, yurdun her yerinden gelen temsilcilerin katılımı ile gerçekleşti. Kongre’ye katılan temsilciler yaptıkları konuşmalarda mücadelenin millet adına yapıldığını, amaçlarının vatanın kurtuluşu ve milletin bağımsızlığı olduğunu açıkladılar. Kongre’de, Anadolu ve Rumeli’de faaliyet gösteren bütün millî cemiyetlerin “Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti” adı altında birleştirilerek vatanın kurtuluşu için birlikte hareket etmeleri de sağlandı. Buna göre, Sivas Kongresi’nin Kurtuluş Savaşı için aşağıdakilerden hangisini sağladığı söylenemez?',
    options: ['Amaç birliğini', 'Kültür birliğini', 'Millî birliği', 'Güç birliğini'],
    correctAnswer: 'Kültür birliğini',
    image: require('./images/17.png')
  },
  {
    question: '“Amasya Genelgesi’nin “Milletin istiklalini, yine milletin azim ve kararı kurtaracaktır.” maddesi ile Kurtuluş Savaşı’nın ................ belirlenmiştir. Verilen cümledeki boş yere aşağıdakilerden hangisi yazılmalıdır?',
    options: ['Sonucu', 'Gerekçesi', 'Yöntemi', 'Aşamaları'],
    correctAnswer: 'Yöntemi',
    image: require('./images/18.png')
  },
  {
    question: 'Yazar, Picardie Manevraları (Fransa\'nın Pikardi Bölgesi \'nde yapılan askerî tatbikat) sırasında Paris\'te Mustafa Kemal\'le yaptığı görüşmeyi şöyle özetler: \"Mustafa Kemal\'e manevralar konusundaki izlenimlerini sorduğumda: "Uçaklar savaşlarda çok önemli rol oynayacaktır.\" dedi. Havacılık o zaman yeniydi ve sadece gözlem amaçlı kullanılıyordu. Mustafa Kemal\'in görüşlerinin isabetsiz olduğunu düşündüm. Yanılmışım, nitekim dört yıl sonra I. Dünya Savaşı\'nda hava gücünün kesin etkisi görüldü. Metinde sözü edilen yazar, Mustafa Kemal\'in hangi kişilik özelliğini kavrayamamıştır?',
    options: ['Kararlılığını ', 'Vatanseverliğini', 'İdealistliğini', 'İleri görüşlülüğünü'],
    correctAnswer: 'İleri görüşlülüğünü',
    image: require('./images/19.png')
  },
  {
    question: 'Mustafa Kemal, Sofya askerî ataşeliği sırasında; bölgede kalan Türkleri ziyaret ederek onlarla yakın ilişkiler kurmuş, Türklerin sosyal ve siyasi haklarının yükseltilmesi için çalışmalar yapmıştır. Mustafa Kemal’in, bu faaliyetleri gerçekleştirmesinde; I. millet sevgisi II. görev bilinci III. yaratıcı düşüncesi Özelliklerinden hangileri etkili olmuştur?',
    options: ['Yalnız I', 'I ve II', 'I ve III', 'II ve III'],
    correctAnswer: 'I ve II',
    image: require('./images/20.png')
  },
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz is finished
      // You can navigate to a different screen or display the result here
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
      alert(`Sınavınız bitmiştir.\nSınav sonucunuz\n = \n ${score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0)}/${questions.length}`);
      setCurrentQuestion(0);
      setScore(0);
    }
  };
  return (
    <View style={styles.container}>
      <Image source={questions[currentQuestion].image} style={styles.image} />
      <Text style={styles.question}>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].options.map((option, index) => (
        <Button 
          key={index}
          title={option}
          onPress={() => handleAnswer(option)}
        />
      ))}
      <Text style={styles.score}>Skor = {score}/{questions.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'beige'
    
  },
  image: {
    width: 300, // Resim boyutlarını ayarlayın
    height: 200,
    marginBottom: 20,
  },
  
  question: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor:'orange'
  },
  score: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor:'beige'
  },
});
