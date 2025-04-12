const VideoSection = () => {
  return (
    <div className="block md:w-[50vw] mx-auto">
      <h3 className="text-lg md:text-l mb-2 text-[#036016]">
        Entrevista ao programa Ourofino em Campo em 02/02/2016
      </h3>
      <iframe
        className="md:w-[660px] md:h-[315px] mr-2"
        src="https://www.youtube.com/embed/9q_AAGejKqc?si=X_mD2A3uVSN6NHol"
        title="Em Discussão: uso de ração na dieta do gado"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
