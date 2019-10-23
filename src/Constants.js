const K = {
  standing: [
    { value: "STEX", label: "In good standing and is exemplary" },
    { value: "STGS", label: "In good standing" },
    { value: "STNE", label: "Needing help/encouragement" },
    { value: "STUR", label: "Under restrictions" },
    { value: "STDF", label: "Disfellowshipped" },
    { value: "STUN", label: "Unbeliever" }
  ],

  appointments: [
    { value: "PMS", article: "a", label: "Ministerial Servant" },
    { value: "PEL", article: "an", label: "Elder" },
    { value: "PRP", article: "a", label: "Regular Pioneer" },
    { value: "PSP", article: "a", label: "Special Pioneer" },
    { value: "PSP", article: "an", label: "LDC volunteer" }
    // { value: "PBE", label: "Bethelite" }
  ],

  assignments: [
    { value: "ALL", label: "Select all" },
    { value: "NONE", label: "Select none" },
    { value: "AVC", label: "A/V: Console" },
    { value: "AVP", label: "A/V: Platform" },
    { value: "AVM", label: "A/V: Microphones" },
    { value: "AVA", label: "A/V: Attendant" },

    { value: "PPR", label: "General: Public prayer" },

    { value: "LMCHM", label: "Life & Ministry: Chairman" },
    { value: "LMTRT", label: "Treasures: Talk" },
    { value: "LMTRG", label: "Treasures: Gems" },
    { value: "LMTRB", label: "Treasures: Bible reading" },
    { value: "LMFMD", label: "Field Ministry: Demo" },
    { value: "LMFMT", label: "Field Ministry: Talk" },
    { value: "LMLCT", label: "Living as Christians: Talk" },
    { value: "LMLCD", label: "Living as Christians: Discussion" },
    {
      value: "LMLCC",
      label: "Living as Christians: Congregation Bible Study: Conductor"
    },
    {
      value: "LMLCR",
      label: "Living as Christians: Congregation Bible Study: Reader"
    },

    { value: "PMPTC", label: "Public Talk: Chairman" },
    { value: "PMPTS", label: "Public Talk: Speaker" },
    { value: "PMPTO", label: "Public Talk: Outgoing speaker" },

    { value: "PMWTC", label: "Watchtower: Conductor" },
    { value: "PMWTR", label: "Watchtower: Reader" },

    { value: "FSGO", label: "FSGO: Overseer" },
    { value: "FSGA", label: "FSGO: Assistant" },

    { value: "PCW", label: "Public (cart) witnessing" },
    { value: "SMPWP", label: "SMPWP (metro cart) witnessing" }
  ],

  fruits: [
    { value: "love", label: "love" },
    { value: "joy", label: "joy" },
    { value: "peace", label: "peace" },
    { value: "patience", label: "patience" },
    { value: "kindness", label: "kindness" },
    { value: "goodness", label: "goodness" },
    { value: "faith", label: "faith" },
    { value: "mildness", label: "mildness" },
    { value: "self-control", label: "self-control" }
  ],

  qualities: [
    { value: "meeting attendance", label: "meeting attendance" },
    { value: "participation at meetings", label: "participation at meetings" },
    { value: "field service activity", label: "field service activity" },
    {
      value: "dependability & organization",
      label: "dependability & organization"
    },
    {
      value: "dignified personal appearance",
      label: "dignified personal appearance"
    },
    { value: "punctuality", label: "punctuality" },
    { value: "balance in judgment", label: "balance in judgment" },
    { value: "reasonableness", label: "reasonableness" },
    { value: "peaceableness", label: "peaceableness" },
    { value: "accepting counsel", label: "accepting counsel" },
    { value: "maturity", label: "maturity" },
    { value: "hospitality", label: "hospitality" },
    { value: "humility", label: "humility" },
    { value: "warmth", label: "warmth" },
    { value: "effective teaching", label: "effective teaching" }
  ],

  sexes: [{ value: "M", label: "Male" }, { value: "F", label: "Female" }],

  samplePeople: [
    {
      id: String(Math.random() * 10000000),
      name: "John",
      age: 46,
      sex: { value: "M", label: "Male" },
      publisher: true,
      enrolled: true,
      baptized: true,
      standing: { value: "STEX", label: "In good standing and is exemplary" },
      familyHead: true,
      appointments: [{ value: "PEL", article: "an", label: "Elder" }],
      recommend: true,
      assignments: [
        { value: "PPR", label: "General: Public prayer" },

        { value: "LMCHM", label: "Life & Ministry: Chairman" },
        { value: "LMTRT", label: "Treasures: Talk" },
        { value: "LMTRG", label: "Treasures: Gems" },
        { value: "LMTRB", label: "Treasures: Bible reading" },
        { value: "LMLCT", label: "Living as Christians: Talk" },
        { value: "LMLCD", label: "Living as Christians: Discussion" },
        {
          value: "LMLCC",
          label: "Living as Christians: Congregation Bible Study: Conductor"
        },

        { value: "PMPTS", label: "Public Talk: Speaker" },
        { value: "PMPTO", label: "Public Talk: Outgoing speaker" },

        { value: "PMWTC", label: "Watchtower: Conductor" },

        { value: "FSGA", label: "FSGO: Assistant" }
      ],
      exemplary: [
        {
          value: "dependability & organization",
          label: "dependability & organization"
        },
        { value: "balance in judgment", label: "balance in judgment" },
        { value: "effective teaching", label: "effective teaching" }
      ],

      workingOn: [],
      additional:
        "John is a hard worker and will no doubt be a positive contribution to your congregation."
    },
    {
      id: String(Math.random() * 10000000),
      name: "Susan",
      age: 46,
      sex: { value: "F", label: "Female" },
      publisher: true,
      enrolled: true,
      baptized: true,
      standing: { value: "STEX", label: "In good standing and is exemplary" },
      appointments: [{ value: "PRP", article: "a", label: "Regular Pioneer" }],
      recommend: true,
      assignments: [{ value: "PCW", label: "Public (cart) witnessing" }],
      exemplary: [
        { value: "hospitality", label: "hospitality" },
        { value: "meeting attendance", label: "meeting attendance" },

        { value: "field service activity", label: "field service activity" }
      ],
      workingOn: [
        {
          value: "participation at meetings",
          label: "participation at meetings"
        }
      ],
      additional:
        "Although Susan is a shy sister, she is working harder at commenting. Susan is coming to your congregation, recently being married to Noah Gerry. Although Susan moved into Rocky Ridge with her family–Boris & Michelle, and Hope (sister), a couple years ago she was actually attending Alabanza (Spanish) congregation. We'd see Susan occasionally, and while always friendly and positive, we can't say a lot about her spiritual state and well-being. Susan has had a troubled youth which caused her to seek professional counselling. It breaks our heart to know this dear sister has been at the receiving end of a series of very unfortunate events. She needs encouragement and love and support–something your congregation can supply in abundance. She has a beautiful personality once you get to know her–this may take time but don't give up on her! We will miss seeing Susan but believe with her marriage mate, and a new congregation, she can put her past behind her and focus on a bright future."
    },
    {
      id: String(Math.random() * 10000000),
      name: "Sophia",
      age: 12,
      sex: { value: "F", label: "Female" },
      publisher: true,
      enrolled: true,
      baptized: true,
      standing: { value: "STGS", label: "In good standing" },
      child: true,
      appointments: []
    },
    {
      id: String(Math.random() * 10000000),
      name: "Caleb",
      age: 8,
      sex: { value: "M", label: "Male" },
      publisher: true,
      enrolled: true,
      baptized: false,
      standing: { value: "STGS", label: "In good standing" },
      child: true,
      assignments: [{ value: "AVM", label: "A/V: Microphones" }]
    }
  ]
};

export default K;

// Qualifications

// moderate in habits,
// sound in mind,
// orderly,
// hospitable,
// qualified to teach,
// not a drunkard,
// not violent,
// reasonable,
// not quarrelsome,
// not a lover of money,
// a man presiding over his own household in a fine manner,
// having his children in subjection with all seriousness,
// not a newly converted man,
// ...
// serious,
// not double-tongued, (deliberately deceptive)
// not indulging in a lot of wine,
// not greedy of dishonest gain,
// holding the sacred secret of the faith with a clean conscience,

// let these be tested as to fitness* first,
// then let them serve as ministers,
