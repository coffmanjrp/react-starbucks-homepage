export const BoxOne = ({ title, text, linkText, link, background }) => (
  <section className={`box bg-${background} text-center py-md`}>
    <div className="box-inner">
      <h2 className="text-xl">{title}</h2>
      <p className="text-md">{text}</p>
      <a href={link}>{linkText}</a>
    </div>
  </section>
);

export const BoxTwo = ({
  title,
  text,
  linkText,
  link,
  image,
  background,
  btnVariant,
}) => (
  <section className={`box bg-${background} grid-col-2`}>
    <img src={image} alt={title} />
    <div className="box-text">
      <h2 className="text-xl">{title}</h2>
      <p className="text-md">{text}</p>
      <a href={link} className={`btn btn-${btnVariant}`}>
        {linkText}
      </a>
    </div>
  </section>
);

export const BoxThree = ({
  title,
  text,
  linkText,
  link,
  image,
  background,
  btnVariant,
}) => (
  <div>
    <img src={image} alt={title} />
    <div className={`bg-${background} py-lg`}>
      <div className="box-text">
        <h2 className="text-md">{title}</h2>
        <p className="text-sm">{text}</p>
        <a href={link} className={`btn btn-${btnVariant}`}>
          {linkText}
        </a>
      </div>
    </div>
  </div>
);

export const BoxContainer = ({ children }) => (
  <section className="box box-container grid-col-2">{children}</section>
);
