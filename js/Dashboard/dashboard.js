const card = [
  {
    id: 1,
    name: "Telmisartan",
    pillCount: 20,
    pillColor: "green",
    dose: "250mg",
    time: "2:00pm",
  },
  {
    id: 2,
    name: "Insuin Injection",
    pillCount: 20,
    pillColor: "pink",
    dose: "5m dose",
    time: "2:00pm",
  },
  {
    id: 3,
    name: "Clopidogrel",
    pillCount: 20,
    pillColor: "blueviolet",
    dose: "40mg",
    time: "2:00pm",
  },
  {
    id: 4,
    name: "Atenolol",
    pillCount: 20,
    pillColor: "green",
    dose: "200mg",
    time: "2:00pm",
  },
  {
    id: 5,
    name: "Furosemide",
    pillCount: 20,
    pillColor: "green",
    dose: "500mg",
    time: "2:00pm",
  },
  {
    id: 6,
    name: "Nifecard",
    pillCount: 20,
    pillColor: "green",
    dose: "100mg",
    time: "2:00pm",
  },
  {
    id: 7,
    name: "Telmisartan",
    pillCount: 20,
    pillColor: "green",
    dose: "250mg",
    time: "2:00pm",
  },
  {
    id: 8,
    name: "Telmisartan",
    pillCount: 20,
    pillColor: "green",
    dose: "250mg",
    time: "2:00pm",
  },
];

console.log(card);

const nameStyle = "color: #4F505E; font-size: 20px; font-style: normal; font-weight: 500; line-height: normal;"
const doseStyle = "color: #4F505E; font-size: 14px; font-style: normal; font-weight: 300; line-height: normal;"

const cards = document.getElementById("cards");

card.map((item) => {
  cards.innerHTML += `
        <div class="card">
            <div class="card_flex">
                <div class="card__header">
                    <div class="card__header__left">
                        <h3 style="${nameStyle}">${item.name}</h3
                        <p>${item.dose} pills</p>
                    </div>
                    <div class="card__header__right">
                        <h3 style="color: #4F505E; font-size: 24px; font-style: normal; font-weight: 700; line-height: normal;">${item.pillCount}</h3>
                        <p style="color: #4F505E; font-size: 12px; font-style: italic; font-weight: 300; line-height: normal;">pill count</p>
                    </div>
                </div>
                <div class="card__body">
                    <h2>Sun</h2>
                    <h2>Mon</h2>
                    <h2>Tue</h2>
                    <h2>Wed</h2>
                    <h2>Thu</h2>
                    <h2>Fri</h2>
                    <h2>Sat</h2>
                </div>
                <div class="card__footer">
                    <div class="card__footer__left">
                        <h3>${item.time}</h3>

                    </div>
                    <div class="card__footer__right">
                        <button class="btn btn--pill btn--pill-${item.pillColor}">Share</button>
                    </div>
                </div>
            </div>
        </div>
    `;
});
