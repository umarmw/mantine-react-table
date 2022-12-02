import { ColumnFiltersState, SortingState } from '@tanstack/react-table';

//This is just a simple mock of a backend API where you would do server-side pagination, filtering, and sorting
//You would most likely want way more validation and error handling than this in a real world application
export default function handler(req, res) {
  let dbData = getData();
  const { start, size, filters, sorting, globalFilter } = req.query;

  const parsedColumnFilters = JSON.parse(filters) as ColumnFiltersState;
  if (!!parsedColumnFilters?.length) {
    parsedColumnFilters.map((filter) => {
      const { id: columnId, value: filterValue } = filter;
      dbData = dbData.filter((row) => {
        return row[columnId]
          ?.toString()
          ?.toLowerCase()
          ?.includes?.((filterValue as string).toLowerCase());
      });
    });
  }

  if (globalFilter) {
    dbData = dbData.filter((row) =>
      Object.keys(row).some((columnId) =>
        row[columnId]
          ?.toString()
          ?.toLowerCase()
          ?.includes?.((globalFilter as string).toLowerCase()),
      ),
    );
  }

  const parsedSorting = JSON.parse(sorting) as SortingState;
  if (!!parsedSorting?.length) {
    const sort = parsedSorting[0];
    const { id, desc } = sort;
    dbData.sort((a, b) => {
      if (desc) {
        return a[id] < b[id] ? 1 : -1;
      }
      return a[id] > b[id] ? 1 : -1;
    });
  }

  res.status(200).json({
    data:
      dbData?.slice(parseInt(start), parseInt(start) + parseInt(size)) ?? [],
    meta: { totalRowCount: dbData.length },
  });
}

//data definitions...
const getData = () => [
  {
    firstName: 'Hermann',
    lastName: 'Gusikowski',
    address: '6099 Douglas Creek',
    state: 'Georgia',
    phoneNumber: '421.698.9405',
  },
  {
    firstName: 'Milford',
    lastName: 'Torp',
    address: '410 Vicenta Radial',
    state: 'Alabama',
    phoneNumber: '805-728-7771 x75361',
  },
  {
    firstName: 'Alda',
    lastName: 'Koss',
    address: '1604 Bernardo Flats',
    state: 'Louisiana',
    phoneNumber: '860.628.3618',
  },
  {
    firstName: 'Eulah',
    lastName: 'Lockman',
    address: "7072 D'Amore Shoal",
    state: 'Tennessee',
    phoneNumber: '1-394-293-7730 x512',
  },
  {
    firstName: 'Justen',
    lastName: 'Hilpert',
    address: '386 Murray Walks',
    state: 'North Carolina',
    phoneNumber: '507.430.8224 x561',
  },
  {
    firstName: 'Vergie',
    lastName: 'Beatty',
    address: '6864 Mann Haven',
    state: 'Maryland',
    phoneNumber: '1-538-794-7917',
  },
  {
    firstName: 'Hosea',
    lastName: 'Herzog',
    address: '95688 Ada Walk',
    state: 'Alabama',
    phoneNumber: '1-330-864-0222 x01172',
  },
  {
    firstName: 'Dillan',
    lastName: 'Effertz',
    address: '94317 Hahn Causeway',
    state: 'New York',
    phoneNumber: '660-433-6667',
  },
  {
    firstName: 'Ambrose',
    lastName: 'Considine',
    address: '365 Fatima Cape',
    state: 'Washington',
    phoneNumber: '(628) 694-0650',
  },
  {
    firstName: 'Domenick',
    lastName: 'Runte',
    address: '07821 Boyle Mountain',
    state: 'New York',
    phoneNumber: '444-660-8840',
  },
  {
    firstName: 'Izaiah',
    lastName: 'Renner',
    address: '286 Kuphal Circles',
    state: 'Wyoming',
    phoneNumber: '(350) 379-3779 x15509',
  },
  {
    firstName: 'Ricardo',
    lastName: 'Ziemann',
    address: '66351 Ethan Light',
    state: 'Minnesota',
    phoneNumber: '(939) 926-9074',
  },
  {
    firstName: 'Clement',
    lastName: 'Cronin',
    address: '60065 Chris Knoll',
    state: 'Nebraska',
    phoneNumber: '(981) 319-5150 x92726',
  },
  {
    firstName: 'Bobby',
    lastName: 'Schuster',
    address: '555 Mann Trace',
    state: 'Arizona',
    phoneNumber: '432-605-5021',
  },
  {
    firstName: 'Alfreda',
    lastName: 'Sporer',
    address: '068 Nader Mountain',
    state: 'New Hampshire',
    phoneNumber: '940-724-6142',
  },
  {
    firstName: 'Gussie',
    lastName: 'Walter',
    address: '58461 Pat Grove',
    state: 'Alabama',
    phoneNumber: '520-922-7671',
  },
  {
    firstName: 'Javier',
    lastName: 'Douglas',
    address: '162 Pacocha Ranch',
    state: 'New York',
    phoneNumber: '(370) 993-8299',
  },
  {
    firstName: 'Sydney',
    lastName: 'Armstrong',
    address: '725 Stracke Landing',
    state: 'Mississippi',
    phoneNumber: '910.942.8141',
  },
  {
    firstName: 'Justine',
    lastName: 'Langworth',
    address: '772 Casimer Shoal',
    state: 'South Dakota',
    phoneNumber: '(350) 810-1145',
  },
  {
    firstName: 'Anabel',
    lastName: 'Leannon',
    address: '51230 Dewayne Camp',
    state: 'Kansas',
    phoneNumber: '1-888-752-3953',
  },
  {
    firstName: 'Ally',
    lastName: 'Goodwin',
    address: '707 Howe Mountains',
    state: 'West Virginia',
    phoneNumber: '1-786-215-5832 x4409',
  },
  {
    firstName: 'Tianna',
    lastName: 'Lang',
    address: '200 Labadie Vista',
    state: 'Montana',
    phoneNumber: '697-639-3479 x6460',
  },
  {
    firstName: 'Noemi',
    lastName: 'Marquardt',
    address: '8239 Paucek Prairie',
    state: 'North Carolina',
    phoneNumber: '1-677-610-6588',
  },
  {
    firstName: 'Leonardo',
    lastName: 'Sawayn',
    address: '12643 Howell Locks',
    state: 'Missouri',
    phoneNumber: '283-273-3920 x41098',
  },
  {
    firstName: 'Melany',
    lastName: 'Corkery',
    address: '333 Upton Manor',
    state: 'Arkansas',
    phoneNumber: '(826) 688-1496 x638',
  },
  {
    firstName: 'Terence',
    lastName: 'McLaughlin',
    address: '3742 Araceli Estate',
    state: 'Arkansas',
    phoneNumber: '(212) 956-0631',
  },
  {
    firstName: 'Jaime',
    lastName: 'Block',
    address: '4862 Estelle Hill',
    state: 'Georgia',
    phoneNumber: '897-843-3047 x0425',
  },
  {
    firstName: 'Bernita',
    lastName: 'Hagenes',
    address: '53797 Hirthe Hills',
    state: 'Pennsylvania',
    phoneNumber: '814.285.1779 x462',
  },
  {
    firstName: 'Friedrich',
    lastName: 'Bergstrom',
    address: '90573 Kihn Parkway',
    state: 'Louisiana',
    phoneNumber: '1-869-704-2983',
  },
  {
    firstName: 'Sarina',
    lastName: 'Gislason',
    address: '00854 Doyle Road',
    state: 'Idaho',
    phoneNumber: '(683) 305-5712',
  },
  {
    firstName: 'Florian',
    lastName: 'Marks',
    address: '46979 Padberg Divide',
    state: 'Mississippi',
    phoneNumber: '(463) 238-4575 x226',
  },
  {
    firstName: 'Clare',
    lastName: 'Carter',
    address: '979 Berge Isle',
    state: 'New Mexico',
    phoneNumber: '895-659-5983',
  },
  {
    firstName: 'Mariam',
    lastName: 'Fritsch',
    address: '246 Tara Mews',
    state: 'Arkansas',
    phoneNumber: '1-851-297-9371 x2937',
  },
  {
    firstName: 'Jamel',
    lastName: 'Balistreri',
    address: '1702 Reinhold Crossroad',
    state: 'New York',
    phoneNumber: '382.405.3098',
  },
  {
    firstName: 'Alexie',
    lastName: 'Blanda',
    address: '899 Mayer Forge',
    state: 'Ohio',
    phoneNumber: '1-213-660-5875 x311',
  },
  {
    firstName: 'Cecilia',
    lastName: 'Kirlin',
    address: '887 Legros Forest',
    state: 'Texas',
    phoneNumber: '(463) 229-3940 x7543',
  },
  {
    firstName: 'Retta',
    lastName: 'Gaylord',
    address: '22556 Johathan Inlet',
    state: 'Nebraska',
    phoneNumber: '1-618-666-7937',
  },
  {
    firstName: 'Damon',
    lastName: 'Conroy',
    address: '5891 Darius Ways',
    state: 'Kentucky',
    phoneNumber: '723.651.0869 x86999',
  },
  {
    firstName: 'Jerrod',
    lastName: 'Roberts',
    address: '97199 Narciso Mountain',
    state: 'Wyoming',
    phoneNumber: '1-662-481-8607',
  },
  {
    firstName: 'Otilia',
    lastName: 'Schamberger',
    address: '02131 Juvenal Squares',
    state: 'West Virginia',
    phoneNumber: '1-900-962-9499',
  },
  {
    firstName: 'Madilyn',
    lastName: 'Ratke',
    address: '2287 Howell Ways',
    state: 'West Virginia',
    phoneNumber: '1-241-356-6434',
  },
  {
    firstName: 'Merritt',
    lastName: 'Tillman',
    address: '6906 Ahmed Vista',
    state: 'Wyoming',
    phoneNumber: '(830) 387-9321',
  },
  {
    firstName: 'Lenna',
    lastName: 'Kilback',
    address: '7565 Dicki Mountains',
    state: 'Montana',
    phoneNumber: '(437) 317-0476 x9463',
  },
  {
    firstName: 'Justice',
    lastName: 'Wisozk',
    address: '632 Ahmed Camp',
    state: 'Pennsylvania',
    phoneNumber: '1-594-770-7724 x090',
  },
  {
    firstName: 'Laurianne',
    lastName: 'Ledner',
    address: '76981 Spencer Walks',
    state: 'Oklahoma',
    phoneNumber: '(685) 701-3169',
  },
  {
    firstName: 'Mossie',
    lastName: 'Prosacco',
    address: '9713 Mante Isle',
    state: 'Delaware',
    phoneNumber: '(231) 851-7102',
  },
  {
    firstName: 'Faye',
    lastName: 'Bashirian',
    address: '01586 Stamm Harbors',
    state: 'Alaska',
    phoneNumber: '769-497-8752',
  },
  {
    firstName: 'Myra',
    lastName: 'Jenkins',
    address: '201 Schowalter Plaza',
    state: 'Maryland',
    phoneNumber: '(569) 376-4319 x92789',
  },
  {
    firstName: 'Wyatt',
    lastName: 'Macejkovic',
    address: '6808 Miracle Isle',
    state: 'Nebraska',
    phoneNumber: '328.615.4206',
  },
  {
    firstName: 'Kamren',
    lastName: 'Blanda',
    address: '1674 Mueller Pass',
    state: 'Idaho',
    phoneNumber: '1-907-688-9197',
  },
  {
    firstName: 'Earl',
    lastName: 'Fadel',
    address: '692 Erdman Lock',
    state: 'Missouri',
    phoneNumber: '(738) 457-8668',
  },
  {
    firstName: 'Floyd',
    lastName: 'Quitzon',
    address: '4501 Bernhard Trafficway',
    state: 'Wyoming',
    phoneNumber: '345-252-3993 x137',
  },
  {
    firstName: 'Verlie',
    lastName: 'Blick',
    address: '448 Mandy Stream',
    state: 'Iowa',
    phoneNumber: '851.213.1056 x05869',
  },
  {
    firstName: 'Boyd',
    lastName: 'Lehner',
    address: '1745 Patricia Trail',
    state: 'Georgia',
    phoneNumber: '1-823-463-7983',
  },
  {
    firstName: 'Vaughn',
    lastName: 'Altenwerth',
    address: '86164 Stamm Trail',
    state: 'Rhode Island',
    phoneNumber: '387.658.0455',
  },
  {
    firstName: 'Dion',
    lastName: 'Dicki',
    address: '906 Hoeger Circles',
    state: 'Tennessee',
    phoneNumber: '(620) 402-0926 x2534',
  },
  {
    firstName: 'Maxwell',
    lastName: 'Turcotte',
    address: '14101 Emard Terrace',
    state: 'Oklahoma',
    phoneNumber: '1-982-446-5308 x464',
  },
  {
    firstName: 'Clarabelle',
    lastName: 'Johnston',
    address: '5691 Rogahn Junctions',
    state: 'New York',
    phoneNumber: '1-355-926-0460',
  },
  {
    firstName: 'Jace',
    lastName: 'Yost',
    address: '826 Martin Flats',
    state: 'Delaware',
    phoneNumber: '(506) 572-8522 x174',
  },
  {
    firstName: 'Justice',
    lastName: 'Bartoletti',
    address: '13767 Nicole Trace',
    state: 'Rhode Island',
    phoneNumber: '958-391-0473 x05450',
  },
  {
    firstName: 'Rodrigo',
    lastName: 'Kozey',
    address: '48814 Kilback Overpass',
    state: 'Alaska',
    phoneNumber: '1-256-284-6866',
  },
  {
    firstName: 'Jaida',
    lastName: 'Barrows',
    address: '52318 Fay Knoll',
    state: 'Maryland',
    phoneNumber: '975.822.1015',
  },
  {
    firstName: 'Kayleigh',
    lastName: "O'Connell",
    address: '178 Fermin Fall',
    state: 'New Mexico',
    phoneNumber: '1-602-265-9742 x208',
  },
  {
    firstName: 'Sibyl',
    lastName: 'Beahan',
    address: '841 Nat Mills',
    state: 'Maine',
    phoneNumber: '1-998-680-4926',
  },
  {
    firstName: 'Amir',
    lastName: 'Kreiger',
    address: '811 Geovanni Green',
    state: 'Maryland',
    phoneNumber: '948-816-0748',
  },
  {
    firstName: 'Freddie',
    lastName: 'Pouros',
    address: '69596 Ritchie Highway',
    state: 'Texas',
    phoneNumber: '685.639.8084',
  },
  {
    firstName: 'Luther',
    lastName: 'Weissnat',
    address: '21870 Doyle Plains',
    state: 'Oklahoma',
    phoneNumber: '906.646.5001 x5485',
  },
  {
    firstName: 'Jazlyn',
    lastName: 'Tromp',
    address: '02223 Gerhold Lodge',
    state: 'Texas',
    phoneNumber: '620.609.8021',
  },
  {
    firstName: 'Monroe',
    lastName: 'Gulgowski',
    address: '6507 Steuber Pass',
    state: 'Pennsylvania',
    phoneNumber: '(566) 588-6599 x811',
  },
  {
    firstName: 'Braeden',
    lastName: 'Okuneva',
    address: '89598 Kshlerin Road',
    state: 'New Jersey',
    phoneNumber: '291-598-8359',
  },
  {
    firstName: 'Teagan',
    lastName: 'Gerhold',
    address: '205 Buster Plaza',
    state: 'Iowa',
    phoneNumber: '1-871-232-7926',
  },
  {
    firstName: 'Helga',
    lastName: 'Franey',
    address: '56005 Kulas Harbor',
    state: 'Vermont',
    phoneNumber: '453-807-6073',
  },
  {
    firstName: 'Roma',
    lastName: 'Klein',
    address: '65176 Nola Vista',
    state: 'New Mexico',
    phoneNumber: '767-945-8529 x8275',
  },
  {
    firstName: 'Marquise',
    lastName: 'Cummerata',
    address: '398 Theresia View',
    state: 'Louisiana',
    phoneNumber: '1-525-342-0154 x170',
  },
  {
    firstName: 'Jed',
    lastName: 'Hayes',
    address: '63640 Donnelly Rue',
    state: 'Hawaii',
    phoneNumber: '(280) 208-8411 x15197',
  },
  {
    firstName: 'Caleb',
    lastName: 'Mante',
    address: '845 Franecki Terrace',
    state: 'Rhode Island',
    phoneNumber: '1-807-393-4906',
  },
  {
    firstName: 'Cameron',
    lastName: 'Brakus',
    address: '203 Cormier Hill',
    state: 'Tennessee',
    phoneNumber: '580-437-1892',
  },
  {
    firstName: 'Allie',
    lastName: 'Feeney',
    address: '293 Larson Rest',
    state: 'New York',
    phoneNumber: '936-527-7160',
  },
  {
    firstName: 'Shanon',
    lastName: 'Oberbrunner',
    address: '03724 Ocie Avenue',
    state: 'Mississippi',
    phoneNumber: '915-519-4900 x055',
  },
  {
    firstName: 'Lauriane',
    lastName: 'Connelly',
    address: '258 Torp Loaf',
    state: 'New York',
    phoneNumber: '752.333.1992',
  },
  {
    firstName: 'Jolie',
    lastName: 'Pacocha',
    address: '574 Lueilwitz Forge',
    state: 'Georgia',
    phoneNumber: '1-255-312-1232',
  },
  {
    firstName: 'Darwin',
    lastName: 'Schinner',
    address: '6641 Jerde Divide',
    state: 'Pennsylvania',
    phoneNumber: '(449) 752-5371',
  },
  {
    firstName: 'Estefania',
    lastName: 'Quigley',
    address: '0226 Ali Expressway',
    state: 'Oregon',
    phoneNumber: '518-499-6231',
  },
  {
    firstName: 'Raymundo',
    lastName: 'Treutel',
    address: '228 Kuhlman Freeway',
    state: 'Tennessee',
    phoneNumber: '974.936.1957 x70558',
  },
  {
    firstName: 'Deangelo',
    lastName: 'Blick',
    address: '029 Violette Station',
    state: 'Missouri',
    phoneNumber: '(741) 405-3853',
  },
  {
    firstName: 'Sarah',
    lastName: 'Labadie',
    address: '503 Leopoldo Cove',
    state: 'Colorado',
    phoneNumber: '204.745.5814 x54620',
  },
  {
    firstName: 'Cordell',
    lastName: 'Dicki',
    address: '849 Malvina Mount',
    state: 'Oklahoma',
    phoneNumber: '424-610-2775 x56165',
  },
  {
    firstName: 'Ibrahim',
    lastName: 'Torphy',
    address: '566 Aleen Ramp',
    state: 'New Mexico',
    phoneNumber: '1-500-693-0802 x4695',
  },
  {
    firstName: 'Nella',
    lastName: 'Gerlach',
    address: '2281 Leffler Village',
    state: 'Kentucky',
    phoneNumber: '659-865-3149 x82226',
  },
  {
    firstName: 'Madalyn',
    lastName: 'Wintheiser',
    address: '575 Wintheiser Common',
    state: 'West Virginia',
    phoneNumber: '349.669.3708 x7744',
  },
  {
    firstName: 'Heidi',
    lastName: 'Krajcik',
    address: '38559 Hailie Grove',
    state: 'Washington',
    phoneNumber: '1-559-717-2720 x558',
  },
  {
    firstName: 'Veronica',
    lastName: 'Flatley',
    address: '08269 Rowe Hill',
    state: 'Utah',
    phoneNumber: '1-941-655-9866 x6133',
  },
  {
    firstName: 'Kimberly',
    lastName: "O'Connell",
    address: '14894 Ashlynn Lock',
    state: 'Rhode Island',
    phoneNumber: '1-484-949-4663',
  },
  {
    firstName: 'Jannie',
    lastName: 'Douglas',
    address: '74809 Mraz Trail',
    state: 'Oregon',
    phoneNumber: '461.287.3248 x66090',
  },
  {
    firstName: 'Zoila',
    lastName: 'Connelly',
    address: '3840 Abel Manor',
    state: 'Wisconsin',
    phoneNumber: '(720) 486-1238 x539',
  },
  {
    firstName: 'Dino',
    lastName: 'Nader',
    address: '96105 Clarissa Spring',
    state: 'Texas',
    phoneNumber: '1-690-682-5517 x506',
  },
  {
    firstName: 'Jarrell',
    lastName: 'Klein',
    address: '28102 Vada Forks',
    state: 'Rhode Island',
    phoneNumber: '818.967.4980',
  },
  {
    firstName: 'Curt',
    lastName: 'Stamm',
    address: '4438 Lina Rest',
    state: 'New Jersey',
    phoneNumber: '506-312-7423 x470',
  },
  {
    firstName: 'Lela',
    lastName: 'Goodwin',
    address: '84052 Gusikowski Canyon',
    state: 'Iowa',
    phoneNumber: '1-995-348-0625',
  },
  {
    firstName: 'Elyse',
    lastName: 'Wuckert',
    address: '47743 Lamar Alley',
    state: 'Illinois',
    phoneNumber: '986-502-6816',
  },
  {
    firstName: 'Marlen',
    lastName: 'Franey',
    address: '518 Kovacek Trail',
    state: 'Alabama',
    phoneNumber: '(466) 519-5017',
  },
  {
    firstName: 'Laury',
    lastName: 'Corkery',
    address: '77904 Victoria Pine',
    state: 'Texas',
    phoneNumber: '874.428.1541',
  },
  {
    firstName: 'Lincoln',
    lastName: 'Weissnat',
    address: '5898 Rolfson Cliff',
    state: 'Washington',
    phoneNumber: '1-452-236-9645',
  },
  {
    firstName: 'Nadia',
    lastName: 'Bernier',
    address: '78167 Windler Oval',
    state: 'Arkansas',
    phoneNumber: '517-783-7505',
  },
  {
    firstName: 'Malcolm',
    lastName: 'Dach',
    address: '98782 Carroll Flats',
    state: 'Pennsylvania',
    phoneNumber: '610-374-0184 x8266',
  },
  {
    firstName: 'Maiya',
    lastName: 'Feeney',
    address: '7803 Ortiz Shore',
    state: 'Nebraska',
    phoneNumber: '1-459-985-0817 x152',
  },
  {
    firstName: 'Hal',
    lastName: 'Cronin',
    address: '914 Hellen Coves',
    state: 'Massachusetts',
    phoneNumber: '276.609.6039',
  },
  {
    firstName: 'Buster',
    lastName: 'Jacobs',
    address: '3974 Kassandra Prairie',
    state: 'Montana',
    phoneNumber: '(678) 685-1364 x02125',
  },
  {
    firstName: 'Garland',
    lastName: 'Okuneva',
    address: '7066 Catalina Prairie',
    state: 'Rhode Island',
    phoneNumber: '336-881-0669 x031',
  },
  {
    firstName: 'Damon',
    lastName: 'Ullrich',
    address: "534 O'Conner Falls",
    state: 'Louisiana',
    phoneNumber: '1-377-497-8909',
  },
  {
    firstName: 'Jordon',
    lastName: 'Steuber',
    address: '3997 Olson Lights',
    state: 'West Virginia',
    phoneNumber: '(834) 340-5699',
  },
  {
    firstName: 'Amparo',
    lastName: 'Volkman',
    address: '434 Shaun Mill',
    state: 'Michigan',
    phoneNumber: '1-389-763-1458',
  },
  {
    firstName: 'Brooklyn',
    lastName: 'Zemlak',
    address: '715 Schamberger Plain',
    state: 'California',
    phoneNumber: '827.857.7624 x2547',
  },
  {
    firstName: 'Carlos',
    lastName: 'Turner',
    address: '8309 Verlie Mount',
    state: 'Connecticut',
    phoneNumber: '479.618.0627 x01411',
  },
  {
    firstName: 'Jay',
    lastName: 'Gaylord',
    address: '19697 Stewart Unions',
    state: 'Michigan',
    phoneNumber: '814.990.2558 x9948',
  },
  {
    firstName: 'Jazmyne',
    lastName: 'Gibson',
    address: '3442 Everette Tunnel',
    state: 'Utah',
    phoneNumber: '542.209.3639',
  },
  {
    firstName: 'Chad',
    lastName: 'Bartell',
    address: '997 Alexander Village',
    state: 'Wyoming',
    phoneNumber: '1-512-366-1968',
  },
  {
    firstName: 'Peter',
    lastName: 'Kessler',
    address: '43711 Nolan Fort',
    state: 'Kentucky',
    phoneNumber: '408.278.2672',
  },
  {
    firstName: 'Joey',
    lastName: 'Koelpin',
    address: '10542 Cleveland Mills',
    state: 'Nebraska',
    phoneNumber: '649.447.7594 x978',
  },
  {
    firstName: 'Tod',
    lastName: 'Sanford',
    address: '7653 Juwan Radial',
    state: 'Wisconsin',
    phoneNumber: '781-209-6459',
  },
  {
    firstName: 'Nakia',
    lastName: 'Moen',
    address: '75115 Donnie Way',
    state: 'Arkansas',
    phoneNumber: '845-690-1809 x274',
  },
  {
    firstName: 'Lavonne',
    lastName: 'Cronin',
    address: '3545 Bulah Circles',
    state: 'Alaska',
    phoneNumber: '(381) 522-1962 x15573',
  },
  {
    firstName: 'Alfredo',
    lastName: 'Treutel',
    address: '90919 Jenkins Stravenue',
    state: 'Mississippi',
    phoneNumber: '262.483.1238 x2432',
  },
  {
    firstName: 'Savanah',
    lastName: 'Graham',
    address: '55171 Johnston Wall',
    state: 'Washington',
    phoneNumber: '1-502-827-8410',
  },
  {
    firstName: 'Esteban',
    lastName: 'Rosenbaum',
    address: '642 Raquel Common',
    state: 'New York',
    phoneNumber: '782-792-6555 x6278',
  },
  {
    firstName: 'Ted',
    lastName: 'Schmeler',
    address: '83783 Alek Summit',
    state: 'Iowa',
    phoneNumber: '415.509.0261',
  },
  {
    firstName: 'Roselyn',
    lastName: 'Doyle',
    address: '0928 Bradly Ridges',
    state: 'Georgia',
    phoneNumber: '1-726-794-4130 x43166',
  },
  {
    firstName: 'Idell',
    lastName: 'Kirlin',
    address: '8527 Hoeger Plains',
    state: 'New Jersey',
    phoneNumber: '1-261-430-1323',
  },
  {
    firstName: 'Oswaldo',
    lastName: 'Koepp',
    address: '000 Camden Land',
    state: 'Massachusetts',
    phoneNumber: '(485) 381-8750',
  },
  {
    firstName: 'Raleigh',
    lastName: 'Dicki',
    address: '84142 Wiza Bridge',
    state: 'Nebraska',
    phoneNumber: '(478) 658-7018 x6805',
  },
  {
    firstName: 'Norma',
    lastName: 'Heller',
    address: '755 Jaskolski Square',
    state: 'Connecticut',
    phoneNumber: '(295) 876-3062',
  },
  {
    firstName: 'Kayla',
    lastName: 'Herzog',
    address: '4739 Parisian Corners',
    state: 'Idaho',
    phoneNumber: '504-458-4377 x34542',
  },
  {
    firstName: 'Adriana',
    lastName: 'Graham',
    address: '2765 Hettinger Mission',
    state: 'Nevada',
    phoneNumber: '691-938-4227',
  },
  {
    firstName: 'Cassie',
    lastName: 'Zemlak',
    address: '10136 Brown Well',
    state: 'Mississippi',
    phoneNumber: '1-886-407-5724',
  },
  {
    firstName: 'Lyric',
    lastName: 'Botsford',
    address: '9858 Bridgette Ways',
    state: 'New York',
    phoneNumber: '921-941-9707 x97387',
  },
  {
    firstName: 'Jalon',
    lastName: 'Auer',
    address: '1337 Spencer Shoals',
    state: 'Arizona',
    phoneNumber: '626.664.1307 x7251',
  },
  {
    firstName: 'Ludwig',
    lastName: 'Olson',
    address: '969 Smith Isle',
    state: 'Utah',
    phoneNumber: '460.363.0230 x433',
  },
  {
    firstName: 'Bridie',
    lastName: 'Brown',
    address: '40022 Herman Fall',
    state: 'Colorado',
    phoneNumber: '(488) 464-2590 x006',
  },
  {
    firstName: 'Catalina',
    lastName: 'Rippin',
    address: '43734 Nitzsche Groves',
    state: 'Colorado',
    phoneNumber: '705-543-3151 x793',
  },
  {
    firstName: 'Carolanne',
    lastName: 'Turcotte',
    address: '7259 Lockman Flats',
    state: 'Oregon',
    phoneNumber: '1-682-446-8574',
  },
  {
    firstName: 'Scotty',
    lastName: 'Williamson',
    address: '61776 Rebeka Summit',
    state: 'Colorado',
    phoneNumber: '829-632-3726 x9232',
  },
  {
    firstName: 'Forest',
    lastName: 'Rau',
    address: '84797 Prohaska Route',
    state: 'Oklahoma',
    phoneNumber: '1-506-693-4479 x7363',
  },
  {
    firstName: 'Mustafa',
    lastName: 'Glover',
    address: '8784 Gilda Ferry',
    state: 'Texas',
    phoneNumber: '(221) 701-4090 x6545',
  },
  {
    firstName: 'Alexa',
    lastName: 'Schaden',
    address: '216 Bashirian Common',
    state: 'Arizona',
    phoneNumber: '(794) 997-1491',
  },
  {
    firstName: 'Valentine',
    lastName: 'Weimann',
    address: '813 Augustus Spur',
    state: 'Utah',
    phoneNumber: '206.690.2919',
  },
  {
    firstName: 'Isabell',
    lastName: 'Senger',
    address: '37201 Corkery Ranch',
    state: 'Iowa',
    phoneNumber: '1-531-713-5087',
  },
  {
    firstName: 'Jakob',
    lastName: 'Jacobs',
    address: '336 Itzel Viaduct',
    state: 'Hawaii',
    phoneNumber: '(652) 827-4708 x04803',
  },
  {
    firstName: 'Adell',
    lastName: 'Bergstrom',
    address: '3844 Cormier Island',
    state: 'Georgia',
    phoneNumber: '647-786-3685 x498',
  },
  {
    firstName: 'Enid',
    lastName: 'Turner',
    address: '9124 Bella Parkway',
    state: 'California',
    phoneNumber: '898.625.2245',
  },
  {
    firstName: 'Jazmyn',
    lastName: 'Bayer',
    address: '994 Vandervort Freeway',
    state: 'Michigan',
    phoneNumber: '1-525-851-3729',
  },
  {
    firstName: 'Wallace',
    lastName: 'Schultz',
    address: '991 Cynthia Islands',
    state: 'South Dakota',
    phoneNumber: '276.486.9138 x19749',
  },
  {
    firstName: 'Ronaldo',
    lastName: 'Bergnaum',
    address: '793 Harvey Cliffs',
    state: 'Minnesota',
    phoneNumber: '(763) 924-8113 x909',
  },
  {
    firstName: 'Jamarcus',
    lastName: 'Dickens',
    address: '458 Raoul Crossing',
    state: 'Minnesota',
    phoneNumber: '1-977-491-1174 x12903',
  },
  {
    firstName: 'Ozella',
    lastName: 'Walsh',
    address: '28623 Imani Mission',
    state: 'Iowa',
    phoneNumber: '1-803-233-1722 x94688',
  },
  {
    firstName: 'Vergie',
    lastName: 'Stokes',
    address: '57283 Dahlia Ranch',
    state: 'New York',
    phoneNumber: '1-974-656-0663 x201',
  },
  {
    firstName: 'Juvenal',
    lastName: 'Rogahn',
    address: '016 Wiegand Plains',
    state: 'Florida',
    phoneNumber: '(569) 709-7816',
  },
  {
    firstName: 'Marisa',
    lastName: "O'Connell",
    address: '9075 Schowalter Crossing',
    state: 'Indiana',
    phoneNumber: '(368) 695-6801 x6567',
  },
  {
    firstName: 'Renee',
    lastName: 'MacGyver',
    address: '28801 Melody Locks',
    state: 'South Carolina',
    phoneNumber: '217-885-0010 x51327',
  },
  {
    firstName: 'Luz',
    lastName: 'Labadie',
    address: '7427 Marvin Lock',
    state: 'Iowa',
    phoneNumber: '1-475-395-9892',
  },
  {
    firstName: 'Thurman',
    lastName: 'Quitzon',
    address: '1451 Houston Center',
    state: 'California',
    phoneNumber: '(606) 818-4644 x897',
  },
  {
    firstName: 'Jerrold',
    lastName: 'Grant',
    address: '26488 Leonel Place',
    state: 'Massachusetts',
    phoneNumber: '1-949-823-5546 x320',
  },
  {
    firstName: 'Charlene',
    lastName: 'Kautzer',
    address: '026 Koch Squares',
    state: 'Delaware',
    phoneNumber: '1-819-452-4832',
  },
  {
    firstName: 'Bennie',
    lastName: 'White',
    address: '8838 Ruthe Lodge',
    state: 'Oregon',
    phoneNumber: '1-326-766-9776 x5871',
  },
  {
    firstName: 'Serena',
    lastName: 'Howell',
    address: '50451 Stephanie Lane',
    state: 'North Dakota',
    phoneNumber: '494.371.8192 x3198',
  },
  {
    firstName: 'Christian',
    lastName: 'Zulauf',
    address: '0536 Marcelino Stravenue',
    state: 'South Dakota',
    phoneNumber: '311.287.5546 x634',
  },
  {
    firstName: 'Trenton',
    lastName: 'Gutmann',
    address: '1794 Friedrich Drives',
    state: 'North Dakota',
    phoneNumber: '587.472.6191 x90105',
  },
  {
    firstName: 'Julianne',
    lastName: 'Reichert',
    address: '39854 Herman Overpass',
    state: 'Missouri',
    phoneNumber: '1-921-342-5327 x91377',
  },
  {
    firstName: 'Arne',
    lastName: 'Jerde',
    address: '73182 Camryn Mills',
    state: 'Ohio',
    phoneNumber: '1-886-609-1117 x1213',
  },
  {
    firstName: 'Russel',
    lastName: 'Prosacco',
    address: '733 Fausto Harbors',
    state: 'Alaska',
    phoneNumber: '(768) 434-0549 x046',
  },
  {
    firstName: 'Sylvan',
    lastName: 'Pacocha',
    address: '1666 Kayden Knolls',
    state: 'Virginia',
    phoneNumber: '890.970.7412 x99529',
  },
  {
    firstName: 'Avis',
    lastName: 'Kemmer',
    address: '067 Dicki Spring',
    state: 'Minnesota',
    phoneNumber: '1-470-276-6628 x7318',
  },
  {
    firstName: 'Vinnie',
    lastName: 'Erdman',
    address: '266 West Parks',
    state: 'Ohio',
    phoneNumber: '295.883.0344 x9687',
  },
  {
    firstName: 'Retha',
    lastName: 'Shanahan',
    address: '92874 Burnice Rest',
    state: 'West Virginia',
    phoneNumber: '1-989-842-2804',
  },
  {
    firstName: 'Sophia',
    lastName: 'Durgan',
    address: '33093 Kris Highway',
    state: 'West Virginia',
    phoneNumber: '257-311-0156 x02940',
  },
  {
    firstName: 'Geovany',
    lastName: 'Tromp',
    address: '04085 Vesta Corners',
    state: 'Oregon',
    phoneNumber: '366.420.6148 x9787',
  },
  {
    firstName: 'Abdullah',
    lastName: 'Williamson',
    address: '2785 Karlie Run',
    state: 'Florida',
    phoneNumber: '(689) 794-2642 x8431',
  },
  {
    firstName: 'Bo',
    lastName: 'Hettinger',
    address: '11099 Dare Isle',
    state: 'Florida',
    phoneNumber: '(359) 794-0686 x05810',
  },
  {
    firstName: 'Lois',
    lastName: 'Reichel',
    address: '41309 Abernathy Valley',
    state: 'Rhode Island',
    phoneNumber: '(444) 941-5900 x2001',
  },
  {
    firstName: 'Elmer',
    lastName: 'Cummerata',
    address: '184 Katrine Shore',
    state: 'Iowa',
    phoneNumber: '372.603.3205 x712',
  },
  {
    firstName: 'Nella',
    lastName: 'Von',
    address: '1350 Stoltenberg Brooks',
    state: 'Texas',
    phoneNumber: '1-925-845-7429 x0536',
  },
  {
    firstName: 'Tyler',
    lastName: 'Orn',
    address: '33097 VonRueden Camp',
    state: 'Iowa',
    phoneNumber: '(930) 397-6101',
  },
  {
    firstName: 'Joy',
    lastName: 'Lockman',
    address: '3235 Isabell Terrace',
    state: 'Louisiana',
    phoneNumber: '(988) 273-5397 x17397',
  },
  {
    firstName: 'Jarret',
    lastName: 'Kulas',
    address: '364 Gorczany Bypass',
    state: 'Georgia',
    phoneNumber: '1-909-780-0982 x92779',
  },
  {
    firstName: 'Pedro',
    lastName: 'Friesen',
    address: '20032 Waylon Hollow',
    state: 'Indiana',
    phoneNumber: '(268) 387-1965',
  },
  {
    firstName: 'Dedric',
    lastName: 'Senger',
    address: '818 Borer Dam',
    state: 'Alaska',
    phoneNumber: '1-462-853-3223',
  },
  {
    firstName: 'Jess',
    lastName: 'Powlowski',
    address: '169 Marion Ridges',
    state: 'South Carolina',
    phoneNumber: '445-623-4865 x41525',
  },
  {
    firstName: 'Herta',
    lastName: 'Schultz',
    address: '46393 Roberta Landing',
    state: 'Minnesota',
    phoneNumber: '798.446.4800',
  },
  {
    firstName: 'Maurine',
    lastName: 'Boyle',
    address: '243 Wade Point',
    state: 'Arkansas',
    phoneNumber: '1-932-491-9223',
  },
  {
    firstName: 'Marjory',
    lastName: 'McClure',
    address: '350 Cheyanne Camp',
    state: 'West Virginia',
    phoneNumber: '1-413-868-6859 x24987',
  },
  {
    firstName: 'Darion',
    lastName: 'Wisozk',
    address: '232 Berge Junctions',
    state: 'Arizona',
    phoneNumber: '1-887-450-7810',
  },
  {
    firstName: 'Freda',
    lastName: 'Boyer',
    address: '4092 Lakin Passage',
    state: 'Arizona',
    phoneNumber: '868-901-8673 x19014',
  },
  {
    firstName: 'Daija',
    lastName: 'Cole',
    address: '998 Feil Causeway',
    state: 'Colorado',
    phoneNumber: '591.689.7935',
  },
  {
    firstName: 'Isidro',
    lastName: 'Barton',
    address: '692 Hannah Harbors',
    state: 'Louisiana',
    phoneNumber: '1-521-632-7204',
  },
  {
    firstName: 'Ada',
    lastName: 'McLaughlin',
    address: '841 Chanelle Canyon',
    state: 'Arkansas',
    phoneNumber: '206.847.6733',
  },
  {
    firstName: 'Sarah',
    lastName: 'Kuhlman',
    address: '473 Ahmed Knoll',
    state: 'North Carolina',
    phoneNumber: '483-459-2066 x0169',
  },
  {
    firstName: 'Branson',
    lastName: 'Boyer',
    address: '0789 Jo Circle',
    state: 'New Mexico',
    phoneNumber: '230.651.5955',
  },
  {
    firstName: 'Humberto',
    lastName: 'Beahan',
    address: '16065 Herman Freeway',
    state: 'Washington',
    phoneNumber: '555-464-7388',
  },
  {
    firstName: 'Domenic',
    lastName: 'Bernier',
    address: '83684 Hagenes Crest',
    state: 'New Mexico',
    phoneNumber: '207.846.6268 x29983',
  },
  {
    firstName: 'Alayna',
    lastName: 'Hand',
    address: '51016 Wisozk Grove',
    state: 'New York',
    phoneNumber: '317-783-7334 x538',
  },
  {
    firstName: 'Henri',
    lastName: 'Gottlieb',
    address: '6075 Doyle Tunnel',
    state: 'Colorado',
    phoneNumber: '(691) 295-0631 x8778',
  },
];
//end