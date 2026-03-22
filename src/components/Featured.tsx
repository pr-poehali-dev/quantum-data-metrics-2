export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/fda6056e-54da-4e56-98ef-e6a7e25df559/files/bd74d88f-a4bb-4e4e-b99f-2bbc740d92b6.jpg"
          alt="Person listening to music"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 id="benefits" className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Музыка как инструмент</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Не просто плейлист — точный подбор треков под твоё состояние. Снимает стресс, улучшает фокус, поднимает энергию и помогает уснуть.
          Доказано нейронаукой.
        </p>
        <button id="start" className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Выбрать настроение
        </button>
      </div>
    </div>
  );
}