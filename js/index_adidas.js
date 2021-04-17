const calendar = document.querySelector("app-calendar");

const isWeekend = day => {
	return day == 7;
}

for(let day = 1; day <= 31; day++) {
	
	const weekend = isWeekend(day)

	calendar.insertAdjecentHTML("beforeend", `<div
		class="day ${weekend ? "weekend": ""}">${day}</div`);
}