import React from 'react'
import laboratoryImage from './sources/carousel/people_in_laboratory_low.webp'
import girlCodingImage from './sources/carousel/girl_coding_low.webp'
import './styles/InvestigationComponent.css'
import chineseLaboratoryImage from './sources/carousel/chinese_in_laboratory_low.webp'
import techCodingImage from './sources/carousel/technology_code_low.webp'
import { useState, useEffect } from 'react'

import manSkating from './sources/investigation/man_skating_low.webp'
import threeSoldiers from './sources/investigation/war_three_soldiers.jpg'

import myLoftLogo from './sources/investigation/my_loft_logo.png'
// import alphaCloudLogo from './sources/investigation/alphaCloudLogo.jfif'
import EBSCOhostLogo from './sources/investigation/EBSCOhostLogo.jfif'
import biblioTechniaLogo from './sources/investigation/biblioTechniaLogo.jfif'
import EngineeringPlusLogo from './sources/investigation/EngineeringPlusLogo.jfif'
import ExLibrisPrimoLogo  from './sources/investigation/ExLibrisPrimoLogo.jfif'
import GaleOneFileComputerScienceLogo from './sources/investigation/GaleOneFileComputerScienceLogo.jfif'

const arrayImagesCarousel = [laboratoryImage,girlCodingImage,chineseLaboratoryImage,techCodingImage];
const LENGTH_ARRAY_IMAGES = arrayImagesCarousel.length;
const LAST_INDEX_ARRAY = LENGTH_ARRAY_IMAGES - 1 ;

const ResourceItemComponent = (props) => {
    const [showDetails, setShowDetails] = useState(false);
    let myResourceJSON = props.resource;
    let itemLogo = myResourceJSON.logo;
    let itemTitle = myResourceJSON.title;
    let itemDescription = myResourceJSON.description;
    let itemLink = myResourceJSON.link;
    let itemDetail = myResourceJSON.detail;
  return (
    <div className='resource-item'>
        <div className="item-image" onMouseEnter={()=>setShowDetails(true)} onMouseLeave={()=>setShowDetails(false)}>
            <div className="item-details" style={{display:showDetails?'flex':'none'}}>
                <p className='detail'>
                    {itemDetail}
                </p>
            </div>
            <img className='item-logo' src={itemLogo} alt="logo base datos cientifica"/>
        </div>
        <div className="item-content">
            <a className='item-link' target="_blank" rel="noopener noreferrer" href={itemLink}>
                <h3 className='item-title'>{itemTitle}</h3>
            </a>
            <span className='item-description'>{itemDescription}</span>
        </div>
    </div>
  )
}

const AdviceComponent = ({type,image,title,text}) => {
    return (<div className="advice">
                  <div className="advice-head">
                      <span>{type}</span>
                  </div>
                  <div className="advice-body">
                      <div className="advice-image-container">
                          <img className='advice-image' src={image} alt="man skating purple sky" />
                      </div>
                      <h3 className='advice-title'>{title}</h3>
                      <p className='advice-text'>{text}</p>
                  </div>
              </div>);
}

export const InvestigationComponent = () => {
    const [indexOfCarouselImage, setIndexOfCarouselImage] = useState(0);
    
    useEffect(() => {
        const switchImageCarousel= setInterval(() => {
            setIndexOfCarouselImage((prevCounter) => prevCounter + 1);
        }, 3000);
      return () => {
        clearInterval(switchImageCarousel);
      }
    }, [])
    useEffect(()=>{
        if (indexOfCarouselImage === LAST_INDEX_ARRAY ){
            setIndexOfCarouselImage(0);
        }
    },[indexOfCarouselImage])
    const EXAMPLE_DESCRIPTION = 'Company that makes things with the lazy fox. Encourage people has lost their mind, you will wind many resources. The lazy quick brown fox tried to chase a rabbit hole.';
    const EXAMPLE_DETAIL = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident itaque quos, obcaecati ratione velit ipsum.';

    const myLoftResource = {logo:myLoftLogo,title:'MyLoft Library',description:EXAMPLE_DESCRIPTION,detail:EXAMPLE_DETAIL,link:'http://localhost:3000'};
    const BiblioTechniaResource = {logo:biblioTechniaLogo,title:'BiblioTechnia',description:EXAMPLE_DESCRIPTION,detail:EXAMPLE_DETAIL,link:'http://localhost:3000'};
    const EBSCOhostResource = {logo:EBSCOhostLogo,title:'EBCSOhost',description:EXAMPLE_DESCRIPTION,detail:EXAMPLE_DETAIL,link:'http://localhost:3000'};
    const EngineeringPlusResource = {logo:EngineeringPlusLogo,title:'Engineering Plus',description:EXAMPLE_DESCRIPTION,detail:EXAMPLE_DETAIL,link:'http://localhost:3000'};
    const GaleOneFileComputerScienceResource = {logo:GaleOneFileComputerScienceLogo,title:'GaleOneFile ComputerScience',description:EXAMPLE_DESCRIPTION,detail:EXAMPLE_DETAIL,link:'http://localhost:3000'};
    const ExLibrisPrimoResource = {logo:ExLibrisPrimoLogo,title:'ExLibris Primo',description:EXAMPLE_DESCRIPTION,detail:EXAMPLE_DETAIL,link:'http://localhost:3000'};

  return (
    <div id='investigation-container'>
        <div className="carousel-image">
            <div className='carousel-content'>
                <h3>RECURSOS DE INVESTIGACION</h3>
                <span>Accede facilmente a los distintos recursos y bases de datos con informacion confiable</span>
            </div>
            <img src={arrayImagesCarousel[indexOfCarouselImage]} alt="current carousel" width={'auto'} height={'auto'}/>
            <div className="overlay"></div>
        </div>

        <div id='investigation-content'>
            <div className="ads-container">
                <div className="daily-tip">
                    <div className="advice-head">
                        <span>TIP DEL DIA</span>
                    </div>
                    <div className="advice-body">
                        <h3 className='advice-title'>Puedes usar Turnitin hasta tres veces por producto</h3>
                        <p className='advice-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, placeat. Eos culpa sit molestiae laudantium. Commodi, saepe! Voluptas, doloremque laborum tempora, aspernatur eligend. </p>
                    </div>
                </div>
                    <AdviceComponent type='NOTICIA' image={manSkating} title='Empieza el torneo de skating en Lince' text='Company that makes things with the lazy fox. Sign up before February 15th , you will wind many resources. The lazy quick brown fox tried to chase a rabbit hole.' />
                    <AdviceComponent type='ARTICLE' image={threeSoldiers} title='Peru frente a la guerra Rusia Ucrania' text='Predictions say that makes things with the lazy fox. Sign up before February 15th , you will wind many resources. The lazy quick brown fox tried to chase a rabbit hole.' />
            </div>
            <div className="resources-container">
                <ResourceItemComponent resource={myLoftResource} />
                <ResourceItemComponent resource={BiblioTechniaResource} />
                <ResourceItemComponent resource={EBSCOhostResource} />
                <ResourceItemComponent resource={EngineeringPlusResource} />
                <ResourceItemComponent resource={GaleOneFileComputerScienceResource} />
                <ResourceItemComponent resource={ExLibrisPrimoResource} />
            </div>
        </div>
    </div>
  )
}
  