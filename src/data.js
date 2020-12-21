const data = {
  pages: [
    {
      type: "cover",
      data: {
        name: "Christian Senk",
        position: "Manager",
        introduction:
          "Mein Name ist Christian Senk und ich habe mein Hobby zum Beruf gemacht. Seit mehr als 9 Jahren arbeite ich im Mobile- und Webbereich. Dabei habe ich nicht nur gelernt, was wichtig ist um gute Software zu programmieren, sondern auch was nötig ist um diese bis zum Kunden zu bringen.",
        contact: {
          address: {
            street: decode([
              29,
              275,
              -167,
              -59,
              169,
              274,
              -158,
              -36,
              137,
              251,
              -136,
              -20,
              134,
              180,
              -148,
              -99,
              155
            ]),
            zipcode: decode([13, 67, -17, 33, 22]),
            city: decode([33, 130, -16, 92, 23, 137, -20, 84, 17])
          },
          mobile: decode([
            1,
            53,
            4,
            36,
            4,
            52,
            -11,
            21,
            28,
            83,
            -35,
            -3,
            54,
            102,
            -52,
            -4,
            53,
            109,
            -52
          ]),
          mail: decode([
            73,
            174,
            -64,
            43,
            3,
            102,
            2,
            116,
            -11,
            104,
            12,
            117,
            -20,
            90,
            -26,
            77,
            34,
            145,
            -42,
            66,
            35,
            144,
            -47,
            58,
            50,
            96,
            3,
            114,
            -5
          ])
        },
        chapters: [
          // {
          //   caption: "Auf einen Blick",
          //   icon: "done_all",
          //   type: "grouped-content",
          //   data: [
          //     {
          //       caption: "Hintergrund",
          //       type: "list",
          //       data: [
          //         "Digital Native",
          //         "Zwiegespaltener Anhänger typisierter Programmiersprachen...",
          //         "... und der rasanten Entwicklungen im funktionalen Web-Umfeld.",
          //         "Android-Enthusiast"
          //       ]
          //     },
          //     {
          //       caption: "Schwerpunkte",
          //       type: "list",
          //       data: [
          //         "Java-Backend Entwicklung mit Play und Spring MVC.",
          //         "Android Java Entwicklung.",
          //         "Web-Entwicklung mit aktuellsten Technologien. Java-/TypeScript, HTML/CSS als Basis.",
          //         "Continuous Integration/Delivery.",
          //         "Testgetriebene Entwicklung von sauberen und wartbaren Ergebnissen."
          //       ]
          //     }
          //   ]
          // },

          {
            caption: "Beruflicher Werdegang",
            icon: "work",
            type: "grouped-content",
            data: [
              {
                type: "experience",
                data: {
                  title: "Manager",
                  place: "MHP - A Porsche Company",
                  start: "Januar 2019",
                  end: "heute"
                }
              },
              {
                type: "experience",
                data: {
                  title: "Senior Consultant",
                  place: "MHP - A Porsche Company",
                  start: "August 2016",
                  end: "Dezember 2018"
                }
              },
              {
                type: "experience",
                data: {
                  title: "Senior Software Engineer",
                  place: "adrodev GmbH",
                  start: "April 2014",
                  end: "Juli 2016"
                }
              },
              {
                type: "experience",
                data: {
                  title: "Software Engineer",
                  place: "Comsoft GmbH",
                  start: "Januar 2012",
                  end: "März 2014"
                }
              },
              {
                type: "experience",
                data: {
                  title: "Software Engineer",
                  place: "CAS Software AG",
                  start: "Oktober 2010",
                  end: "Dezember 2011"
                }
              }
            ]
          },
          {
            caption: "Ausbildung",
            icon: "school",
            type: "grouped-content",
            data: [
              {
                type: "experience",
                data: {
                  title: "Bachelor of Science",
                  subtitle: "Angewandte Informatik",
                  place: "DHBW Karlsruhe",
                  start: "Oktober 2007",
                  end: "September 2010"
                }
              }
            ]
          }
        ]
      }
    },
    {
      type: "standard",
      data: {
        chapters: [
          {
            caption: "Projekte",
            icon: "build",
            type: "grouped-content",
            data: [
              {
                caption: "2016",
                type: "project",
                data: {
                  title: "Aufmaß Assistent",
                  description:
                    "Entwicklung einer Android-App zur leichteren Vermessung von Objekten und der Zuordnung zu entsprechenden Kundendaten.",
                  start: "Februar 2016",
                  end: "heute",
                  role: "Autor",
                  stack: [
                    "Android",
                    "Java",
                    "ACRA",
                    "SQLite",
                    "GreenDAO",
                    "Android Annotations",
                    "Dagger 2",
                    "Leica Disto Bluetooth",
                    "Gradle"
                  ]
                }
              },
              {
                type: "project",
                data: {
                  title: "Support-Center Anwendung",
                  description:
                    "Entwicklung einer Webbasierten Anwendung mit Fokus auf Callcenter Mitarbeitern als zentrale Anwender.",
                  place: "MHP - A Porsche Company",
                  customer: "Automobil-Hersteller (NDA)",
                  start: "August 2016",
                  end: "heute",
                  role: "Entwickler",
                  stack: [
                    "JavaScript",
                    "AngularJS 1",
                    "LESS",
                    "JWT",
                    "NPM",
                    "Webpack"
                  ]
                }
              },
              {
                type: "project",
                data: {
                  title: "Besuchsprotokollierung",
                  description:
                    "Erweiterung einer Webbasierten Anwendung zur Erfassung von Besuch und ableiten von Maßnahmen.",
                  place: "MHP - A Porsche Company",
                  customer: "Automobil-Hersteller (NDA)",
                  start: "November 2016",
                  end: "Dezember 2016",
                  role: "Verantwortlicher Entwickler",
                  stack: [
                    "Java 7",
                    "Play Framework 1.2",
                    "REST",
                    "H2",
                    "JavaScript",
                    "AngularJS 1",
                    "SASS"
                  ]
                }
              },
              {
                type: "project",
                data: {
                  title: "Notizenverwaltung",
                  description:
                    "Erweiterung einer Webbasierten Anwendung zur zentralen Verwaltung von Notizen.",
                  place: "adrodev Gmbh",
                  customer: "Automobil-Hersteller (NDA)",
                  start: "April 2016",
                  end: "Juli 2016",
                  role: "Verantwortlicher Entwickler",
                  stack: [
                    "Java 7",
                    "Play Framework 1.2",
                    "REST",
                    "H2",
                    "JavaScript",
                    "AngularJS 1",
                    "SASS"
                  ]
                }
              }
            ]
          }
        ]
      }
    },
    {
      type: "standard",
      data: {
        chapters: [
          {
            caption: "Projekte (Fortsetzung)",
            icon: "build",
            type: "grouped-content",
            data: [
              {
                caption: "2016",
                type: "project",
                data: {
                  title: "Gebrauchtwagen-Plattform",
                  description:
                    "Architektur, Planung und Implementierung von Prototypen für Konzeption einer Gebrauchtwagen-Plattform.",
                  place: "adrodev GmbH",
                  customer: "Automobil-Hersteller (NDA)",
                  start: "Januar 2016",
                  end: "März 2016",
                  role: "Architekt und Entwickler",
                  stack: [
                    "Java 8",
                    "Play Framework 2",
                    "REST",
                    "PostgreSQL",
                    "TypeScript",
                    "ReactJS"
                  ]
                }
              },
              {
                caption: "2015",
                type: "project",
                data: {
                  title: "Dokumentenverwaltung",
                  description:
                    "Entwicklung einer Webbasierten Anwendung zur Verwaltung und Einsicht von Dokumenten.",
                  place: "adrodev GmbH",
                  customer: "Anwaltskanzlei (NDA)",
                  start: "Juli 2015",
                  end: "Dezember 2015",
                  role: "Technische Projektleitung, Entwickler",
                  stack: [
                    "Java 8",
                    "Play Framework 2",
                    "REST",
                    "PostgreSQL",
                    "AngularJS 1",
                    "SASS",
                    "Webpack",
                    "PDF.JS",
                    "NPM"
                  ]
                }
              },
              {
                type: "project",
                data: {
                  title: "Inventarisierungs-Prototyp",
                  description:
                    "Entwicklung eines iOS-App Prototyps zur Filial-Inventarisierung.",
                  place: "adrodev GmbH",
                  customer: "Einzelhandelskette (NDA)",
                  start: "Mai 2015",
                  end: "Juni 2015",
                  role:
                    "Business-Logik Entwicklung, Anbindung externer Schnittstellen",
                  stack: [
                    "Xamarin",
                    "iOS",
                    "SQLite",
                    "SQLite.NET + Extensions",
                    "C#",
                    "Proprietäres TCP Protokoll"
                  ]
                }
              },
              {
                type: "project",
                data: {
                  title: "Handelsvertreter App",
                  description:
                    "Entwicklung einer iOS-App zur Unterstützung von Außendienst-Mitarbeitern zur Unterstützung von Verkaufs-Tätigkeiten.",
                  place: "adrodev GmbH",
                  customer: "Messgeräte Hersteller (NDA)",
                  start: "Januar 2015",
                  end: "April 2015",
                  role: "Business-Logik Entwicklung",
                  stack: [
                    "Xamarin",
                    "iOS",
                    "SQLite",
                    "SQLite.NET + Extensions",
                    "C#",
                    "REST"
                  ]
                }
              }
            ]
          }
        ]
      }
    },
    {
      type: "standard",
      data: {
        chapters: [
          {
            caption: "Projekte (Fortsetzung)",
            icon: "build",
            type: "grouped-content",
            data: [
              {
                caption: "2014",
                type: "project",
                data: {
                  title: "Kalender-App",
                  description:
                    "Entwicklung einer iOS-App zur Unterstützung von Außendienst-Mitarbeitern bei der Terminplanung.",
                  place: "adrodev GmbH",
                  customer:
                    "Pfeiffer & May (Großhändler für Bad-/Heizungsbedarf)",
                  start: "Juli 2014",
                  end: "Dezember 2014",
                  role: "Business-Logik Entwicklung",
                  stack: [
                    "Xamarin",
                    "iOS",
                    "SQLite",
                    "SQLite.NET + Extensions",
                    "C#",
                    "REST"
                  ]
                }
              },
              {
                type: "project",
                data: {
                  title: "Umfrage-App",
                  description:
                    "Entwicklung einer Android-App zur Durchführung von Umfragen am Kunden.",
                  place: "adrodev GmbH",
                  customer: "New Yorker (Bekleidungsunternehmen)",
                  start: "April 2014",
                  end: "Juni 2014",
                  role: "Xamarin-Android Entwicklung",
                  stack: [
                    "Xamarin",
                    "Android",
                    "SQLite",
                    "SQLite.NET + Extensions",
                    "C#",
                    "REST"
                  ]
                }
              },
              {
                caption: "2014 - 2012",
                type: "project",
                data: {
                  title: "Wetter-Nachrichten Verwaltung",
                  description:
                    "Entwicklung einer Webbasierten Anwendung zur Verwaltung von Flugrelevanten Wetternachrichten (METAR).",
                  place: "Comsoft GmbH",
                  start: "Juli 2012",
                  end: "März 2014",
                  role: "Entwickler",
                  stack: ["GWT", "Java", "JavaScript", "HTML", "CSS", "Gradle"]
                }
              },
              {
                type: "project",
                data: {
                  title: "GWT Applikationsplattform",
                  description:
                    "Entwicklung einer Plattform auf Basis von GWT um Kunden-spezifische Produkte schnell und einfach zusammenzustellen und zu liefern.",
                  place: "Comsoft GmbH",
                  start: "Januar 2012",
                  end: "Juni 2012",
                  role: "Architekt, Entwickler",
                  stack: ["GWT", "Java", "JavaScript", "HTML", "CSS", "Gradle"]
                }
              },
              {
                caption: "2010 - 2011",
                type: "project",
                data: {
                  title: "REST-Schnittstelle",
                  description:
                    "Entwicklung einer REST-Schnittstelle zur Anbindung von älteren DCOM-Schnittstellen.",
                  place: "CAS Software AG",
                  start: "Oktober 2010",
                  end: "Dezember 2011",
                  role: "Architekt, Entwickler",
                  stack: [".NET", "C#", "COM+", "ANTLR", "SQL", "REST"]
                }
              }
            ]
          }
        ]
      }
    },
    {
      type: "standard",
      data: {
        chapters: [
          {
            caption: "Fähigkeiten",
            icon: "code",
            type: "grouped-content",
            data: [
              {
                caption: "Vorgehensmodelle",
                type: "skills",
                data: [
                  {
                    name: "Objektorientierte-Programmierung",
                    value: 3 / 3
                  },
                  {
                    name: "Funktionale Programmierung",
                    value: 3 / 3
                  },
                  {
                    name: "Entwurfsmuster",
                    value: 3 / 3
                  },
                  {
                    name: "Test-Driven-Development",
                    value: 3 / 3
                  },
                  {
                    name: "Inversion-of-Control / DI",
                    value: 3 / 3
                  },
                  {
                    name: "Continuous Integration",
                    value: 2 / 3
                  },
                  {
                    name: "Continuous Delivery",
                    value: 2 / 3
                  }
                ]
              },
              {
                caption: "Sprachen",
                type: "skills",
                data: [
                  {
                    name: "Java 6 - 8",
                    value: 3 / 3
                  },
                  {
                    name: "JavaScript (<= ECMAScript 6)",
                    value: 3 / 3
                  },
                  {
                    name: "TypeScript",
                    value: 3 / 3
                  },
                  {
                    name: "HTML 4 & 5",
                    value: 3 / 3
                  },
                  {
                    name: "CSS 2 & 3",
                    value: 3 / 3
                  },
                  {
                    name: "SQL",
                    value: 2 / 3
                  },
                  {
                    name: "C#",
                    value: 2 / 3
                  },
                  {
                    name: "Delphi",
                    value: 2 / 3
                  },
                  {
                    name: "C++",
                    value: 1 / 3
                  }
                ]
              },
              {
                caption: "Technologien",
                type: "skills",
                data: [
                  {
                    name: "Gradle",
                    value: 3 / 3
                  },
                  {
                    name: "Maven",
                    value: 2 / 3
                  },
                  {
                    name: "Ant",
                    value: 2 / 3
                  },
                  {
                    name: "SBT",
                    value: 1 / 3
                  },
                  {
                    name: "NPM",
                    value: 3 / 3
                  },
                  {
                    name: "Yarn",
                    value: 3 / 3
                  },
                  {
                    name: "Gulp",
                    value: 2 / 3
                  },
                  {
                    name: "Grunt",
                    value: 1 / 3
                  },
                  {
                    name: "Webpack",
                    value: 3 / 3
                  },
                  {
                    name: "Bower",
                    value: 1 / 3
                  },
                  {
                    name: "Google Guava",
                    value: 3 / 3
                  },
                  {
                    name: "Apache Commons",
                    value: 2 / 3
                  },
                  {
                    name: "Google Guice",
                    value: 3 / 3
                  },
                  {
                    name: "Spring",
                    value: 2 / 3
                  },
                  {
                    name: "Hibernate",
                    value: 2 / 3
                  },
                  {
                    name: "Elasticsearch",
                    value: 1 / 3
                  },
                  {
                    name: "SOLR",
                    value: 1 / 3
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      type: "standard",
      data: {
        chapters: [
          {
            caption: "Fähigkeiten (Fortsetzung)",
            icon: "code",
            type: "grouped-content",
            data: [
              {
                caption: "Technologien",
                type: "skills",
                data: [
                  {
                    name: "Android Annotations",
                    value: 3 / 3
                  },
                  {
                    name: "GreenDAO",
                    value: 3 / 3
                  },
                  {
                    name: "Dagger 2",
                    value: 3 / 3
                  },
                  {
                    name: "AngularJS 1 & 2",
                    value: 3 / 3
                  },
                  {
                    name: "ReactJS",
                    value: 2 / 3
                  },
                  {
                    name: "Vue.JS",
                    value: 3 / 3
                  },
                  {
                    name: "Lodash",
                    value: 3 / 3
                  },
                  {
                    name: "Moment",
                    value: 3 / 3
                  },
                  {
                    name: "jQuery",
                    value: 3 / 3
                  },
                  {
                    name: "LESS",
                    value: 2 / 3
                  },
                  {
                    name: "SASS",
                    value: 2 / 3
                  }
                ]
              },
              {
                caption: "Tooling",
                type: "skills",
                data: [
                  {
                    name: "IntelliJ",
                    value: 3 / 3
                  },
                  {
                    name: "Android Studio",
                    value: 3 / 3
                  },
                  {
                    name: "Eclipse",
                    value: 2 / 3
                  },
                  {
                    name: "Atom",
                    value: 2 / 3
                  },
                  {
                    name: "Xamarin",
                    value: 2 / 3
                  },
                  {
                    name: "MySQL",
                    value: 2 / 3
                  },
                  {
                    name: "PostgreSQL",
                    value: 2 / 3
                  },
                  {
                    name: "SQLite",
                    value: 2 / 3
                  },
                  {
                    name: "Oracle",
                    value: 1 / 3
                  },
                  {
                    name: "MongoDB",
                    value: 2 / 3
                  },
                  {
                    name: "JIRA",
                    value: 2 / 3
                  },
                  {
                    name: "Confluence",
                    value: 2 / 3
                  },
                  {
                    name: "Upsource",
                    value: 3 / 3
                  },
                  {
                    name: "Crucible",
                    value: 3 / 3
                  },
                  {
                    name: "Subversion",
                    value: 3 / 3
                  },
                  {
                    name: "GIT",
                    value: 3 / 3
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]
};

/**
 * Decodes an array of numbers into a string.
 * Nothing special, just to make it harder for bots and scraper to get my contact details.
 *
 * @param  {Array} value the array to decode.
 * @return {String}
 */
function decode(value) {
  // [13, 61, -8, 49, 8]
  var modifier = 42;
  var result = "";

  for (var index = 0; index < value.length; index++) {
    var code = value[index];

    var previousModifier = modifier;
    modifier = code;

    code += previousModifier * (index % 2 ? -1 : 1);
    result += String.fromCodePoint(code);
  }

  return result;
}

function encode(value) {
  var modifier = 42;
  var result = [];

  for (var index = 0; index < value.length; index++) {
    var code = value.codePointAt(index);

    var previousModifier = modifier;

    code += previousModifier * (index % 2 ? 1 : -1);
    modifier = code;
    result.push(code);
  }

  return result;
}

export default data;
