// Shared by the start page list and the case pages.
export type Media =
  | { type: 'image'; src: string; alt: string; width: number; height: number }
  | { type: 'video'; src: string; poster: string; label: string; width: number; height: number };

export type Chapter = {
  title: string;
  media: Media[];
};

export type Work = {
  slug: string;
  client: string;
  role: string;
  img: string;
  alt: string;
  focus?: string;
  summary: string;
  chapters: Chapter[];
};

export const works: Work[] = [
  {
    slug: 'sns',
    client: 'Sneakersnstuff',
    role: 'Concept, art direction, styling, casting',
    img: '/images/nike-pre-day-03.png',
    alt: 'Nike Air Max campaign poster for Sneakersnstuff',
    focus: 'center top',
    summary:
      'I led concepts from pitch to final delivery, across global campaigns and smaller editorials. My role covered concept, art direction, styling and casting, including assembling teams of photographers, stylists and make-up artists. I also worked with content creators in seven cities to produce locally relevant content for each store.',
    chapters: [
      {
        title: 'Spring 2022',
        media: [
          { type: 'image', src: '/work/sns/spring-01.png', alt: 'Close-up of a face with a frog in the mouth', width: 784, height: 980 },
          { type: 'image', src: '/work/sns/spring-02.png', alt: 'Sneakersnstuff Spring 2022 editorial', width: 1132, height: 1318 },
          { type: 'image', src: '/work/sns/spring-03.png', alt: 'Sneakersnstuff Spring 2022 editorial', width: 1132, height: 1314 },
        ],
      },
      {
        title: 'Nike Air Max',
        media: [
          { type: 'image', src: '/work/sns/air-max-01.png', alt: 'Nike Air Max campaign poster for Sneakersnstuff', width: 663, height: 831 },
          { type: 'image', src: '/work/sns/air-max-02.png', alt: 'Nike Air Max campaign poster for Sneakersnstuff', width: 637, height: 798 },
          { type: 'image', src: '/work/sns/air-max-03.png', alt: 'Model in a shiny black jacket on a wavy wooden floor', width: 962, height: 1198 },
        ],
      },
      {
        title: 'Asics × SNS Novablast',
        media: [
          { type: 'image', src: '/work/sns/asics-01.png', alt: 'Asics Novablast editorial for Sneakersnstuff', width: 912, height: 1123 },
          { type: 'image', src: '/work/sns/asics-02.png', alt: 'Asics Novablast editorial for Sneakersnstuff', width: 834, height: 1028 },
          { type: 'image', src: '/work/sns/asics-03.png', alt: 'Asics Novablast sneakers', width: 912, height: 744 },
        ],
      },
      {
        title: 'SNS × New Balance',
        media: [
          { type: 'video', src: '/work/sns/new-balance-game.mp4', poster: '/work/sns/new-balance-game-poster.jpg', label: 'SNS × New Balance game animation', width: 568, height: 320 },
        ],
      },
      {
        title: 'The SNS 574',
        media: [
          { type: 'image', src: '/work/sns/new-balance-01.png', alt: 'New Balance 574 sneakers with hand-drawn illustrations, The SNS 574', width: 1042, height: 1302 },
          { type: 'image', src: '/work/sns/new-balance-02.png', alt: 'New Balance 574 sneakers with hand-drawn illustrations, The SNS 574', width: 1042, height: 1300 },
          { type: 'image', src: '/work/sns/new-balance-03.png', alt: 'New Balance 574 sneakers with hand-drawn illustrations, The SNS 574', width: 1040, height: 1300 },
        ],
      },
      {
        title: 'Dr. Martens',
        media: [
          { type: 'image', src: '/work/sns/dr-martens-01.png', alt: 'Dr. Martens editorial for Sneakersnstuff', width: 948, height: 1316 },
        ],
      },
      {
        title: 'Selected editorials',
        media: [
          { type: 'image', src: '/work/sns/winter-05.png', alt: 'Sneakersnstuff winter editorial', width: 710, height: 888 },
          { type: 'image', src: '/work/sns/winter-06.png', alt: 'Sneakersnstuff winter editorial', width: 704, height: 886 },
          { type: 'image', src: '/work/sns/winter-07.png', alt: 'Sneakersnstuff winter editorial', width: 710, height: 888 },
          { type: 'image', src: '/work/sns/winter-08.png', alt: 'Sneakersnstuff winter editorial', width: 712, height: 884 },
          { type: 'image', src: '/work/sns/winter-10.png', alt: 'Sneakersnstuff winter editorial', width: 708, height: 882 },
          { type: 'image', src: '/work/sns/winter-14.png', alt: 'Sneakersnstuff winter editorial', width: 708, height: 892 },
        ],
      },
    ],
  },
  {
    slug: 'urbanears',
    client: 'Urbanears',
    role: 'Brand, concept, art direction, creative lead',
    img: '/images/urbanears-juno-04.png',
    alt: 'Open Urbanears Juno charging case with earbuds, lit against a black background',
    summary:
      'I helped shape the Urbanears brand guidelines, pitched concepts and led the creative direction for the Juno and Zinken launches.',
    chapters: [
      {
        title: 'Juno',
        media: [
          { type: 'image', src: '/work/urbanears/juno-01.png', alt: 'Open Urbanears Juno charging case with earbuds on black', width: 1371, height: 1696 },
          { type: 'video', src: '/work/urbanears/juno-loop.mp4', poster: '/work/urbanears/juno-loop-poster.jpg', label: 'Urbanears Juno product loop', width: 480, height: 480 },
          { type: 'image', src: '/work/urbanears/juno-02.png', alt: 'Urbanears Juno campaign image', width: 667, height: 832 },
          { type: 'image', src: '/work/urbanears/juno-03.png', alt: 'Urbanears Juno campaign image', width: 675, height: 838 },
          { type: 'image', src: '/work/urbanears/juno-04.png', alt: 'Urbanears Juno campaign image', width: 673, height: 832 },
          { type: 'image', src: '/work/urbanears/juno-05.png', alt: 'Urbanears Juno campaign image', width: 667, height: 832 },
          { type: 'image', src: '/work/urbanears/juno-06.png', alt: 'Urbanears Juno campaign image', width: 672, height: 839 },
          { type: 'image', src: '/work/urbanears/juno-07.png', alt: 'Urbanears Juno campaign image', width: 657, height: 816 },
        ],
      },
      {
        title: 'Zinken',
        media: [
          { type: 'image', src: '/work/urbanears/zinken-01.png', alt: 'Urbanears Zinken headphones, CGI render', width: 1080, height: 1350 },
          { type: 'image', src: '/work/urbanears/zinken-02.png', alt: 'Urbanears Zinken headphones, CGI render', width: 1080, height: 1350 },
          { type: 'image', src: '/work/urbanears/zinken-03.png', alt: 'Urbanears Zinken headphones, CGI render', width: 1080, height: 1350 },
        ],
      },
    ],
  },
  {
    slug: 'marshall',
    client: 'Marshall',
    role: 'Art direction, creative routes, design review',
    img: '/images/marshall-heston-pdp-05.avif',
    alt: 'People dancing in a living room with a Marshall Heston speaker under the TV',
    summary:
      'I art directed Marshall’s marketing concepts, from smaller editorials to the website and larger campaigns like Heston 120. In a global team, I developed and presented creative routes for each concept and refined them with stakeholders until one was chosen. I also reviewed the work of our designers.',
    chapters: [
      {
        title: 'Heston 120',
        media: [
          { type: 'image', src: '/work/marshall/heston-01.png', alt: 'Marshall Heston 120 speaker', width: 1710, height: 1286 },
          { type: 'image', src: '/work/marshall/heston-05.avif', alt: 'People dancing in a living room with a Marshall Heston speaker under the TV', width: 960, height: 960 },
          { type: 'image', src: '/work/marshall/heston-02.avif', alt: 'Marshall Heston 120 lifestyle image', width: 1600, height: 1600 },
          { type: 'image', src: '/work/marshall/heston-03.avif', alt: 'Marshall Heston 120 lifestyle image', width: 1600, height: 1600 },
          { type: 'image', src: '/work/marshall/heston-04.avif', alt: 'Marshall Heston 120 lifestyle image', width: 2160, height: 1216 },
        ],
      },
      {
        title: 'Partnership films',
        media: [
          { type: 'video', src: '/work/marshall/partnership-loop-01.mp4', poster: '/work/marshall/partnership-loop-01-poster.jpg', label: 'Marshall partnership film', width: 384, height: 480 },
          { type: 'video', src: '/work/marshall/partnership-loop-02.mp4', poster: '/work/marshall/partnership-loop-02-poster.jpg', label: 'Marshall partnership film', width: 384, height: 480 },
        ],
      },
      {
        title: 'SXSW',
        media: [
          { type: 'video', src: '/work/marshall/sxsw-01.mp4', poster: '/work/marshall/sxsw-01-poster.jpg', label: 'Marshall SXSW social reel', width: 320, height: 568 },
          { type: 'video', src: '/work/marshall/sxsw-02.mp4', poster: '/work/marshall/sxsw-02-poster.jpg', label: 'Marshall SXSW social reel with J Mascis', width: 320, height: 568 },
        ],
      },
    ],
  },
];
