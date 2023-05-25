import "./styles.css";

const FooterRight = (props: any) => {
  const {title, firstSubTitle, secondSubTitle, thirdSubTitle } = props
  return (
    <div className="informationsBlock">
      <h3>{title}</h3>
      <div>{firstSubTitle}</div>
      <div>{secondSubTitle}</div>
      <div>{thirdSubTitle}</div>
    </div>
  
  )
}

export default FooterRight