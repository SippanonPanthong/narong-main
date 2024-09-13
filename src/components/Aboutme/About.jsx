import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import avatar1 from '../../assets/Profile3.jpg';
import avatar2 from '../../assets/IMG_0113.jpg';
import avatar3 from '../../assets/Profile.png';
import './about.css';

function About() {
    const [showTextBox, setShowTextBox] = useState(false);
    const [randomText, setRandomText] = useState('');
    const [currentImage, setCurrentImage] = useState(avatar3);
    const [currentImage2, setCurrentImage2] = useState(avatar1);

    const textOptions = [
        'ยินดีที่ได้รู้จัก',
        'ฉันชื่อเล่น บาส',
        'อยากรู้ฉันให้มากขึ้นใช่ไหมหล่ะ',
        'อยากรู้อะไร เลือกด้านบนได้เลย',
        'ดีใจนะ ที่เข้ามาเยี่ยมชม',
        'ขอบคุณครับ'
    ];

    useEffect(() => {
        if (showTextBox) {
            const randomIndex = Math.floor(Math.random() * textOptions.length);
            setRandomText(textOptions[randomIndex]);
        }
    }, [showTextBox]);

    const handleImageClick = () => {
        setShowTextBox(!showTextBox);
    };

    const handleImage2Click = () => {
        setShowTextBox(!showTextBox);
    };

    useEffect(() => {
        if (showTextBox && randomText === '' && textOptions.length > 0) {
            setRandomText('สวัสดีครับ');
        }
    }, [showTextBox, randomText, textOptions]);

    return (
        <div className="about-container" id="about-me">
            <div className="dot-container">
                {Array.from({ length: 150 }, (_, index) => {
                    const dotStyle = {
                        backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`,
                        left: `${Math.random() * 100}vw`,
                        top: `${Math.random() * 100}vh`,
                        animationDelay: `-${Math.random() * 20}s`,
                    };
                    return <div className="dot" style={dotStyle} key={index}></div>;
                })}
            </div>

{/* Second Avatar image with click event 
            <div className="container text-center">
                <h1 className='first-name'>Mr. Narongdach Sujintanathum</h1>
                
                <p className='personal-title'>"ผมเป็นนักเรียนมัธยมปลายที่มีความสนใจในด้านเทคโนโลยีสารสนเทศ และ การเขียนโปรแกรมเป็นสิ่งที่ผมชื่นชอบมาก"</p>
                <p className='about-me'>
                เพราะมันไม่เพียงแต่ช่วยให้ผมแก้ปัญหาได้อย่างสร้างสรรค์ แต่ยังเปิดโอกาสให้ผมได้ค้นพบและเรียนรู้สิ่งใหม่ๆ อยู่เสมอ ผมมีความกระตือรือร้นในการพัฒนาทักษะด้านนี้ และเชื่อว่าการศึกษาในคณะเทคโนโลยีสารสนเทศจะช่วยเสริมสร้างความรู้และความสามารถที่จำเป็นในการก้าวหน้าในอนาคต ผมมั่นใจว่าการเรียนในคณะนี้จะทำให้ผมสามารถนำความรู้ที่ได้รับไปใช้ในการพัฒนาเทคโนโลยีที่มีประโยชน์ต่อสังคมได้
                <br/>
                <br/>
                ผมหวังเป็นอย่างยิ่งว่าจะได้เข้าร่วมเป็นส่วนหนึ่งของมหาวิทยาลัยนี้ เพื่อเรียนรู้และเติบโตไปพร้อมกับเพื่อนร่วมรุ่นและคณาจารย์ที่มีความรู้และประสบการณ์ ผมเชื่อว่ามหาวิทยาลัยของท่านจะเป็นสถานที่ที่เหมาะสมที่สุดสำหรับผมในการพัฒนาทักษะและเติบโตในสายงานที่ผมรัก
                </p> 
*/}                

                <div className="container text-center">
                <h1 className='first-name'>Mr. Narongdach Sujintanathum</h1>
                
                <p className='personal-title'>สวัสดีครับ ผมนายณรงค์เดช สุจินตนาธรรม ผมมีความสนใจในการเรียนรู้สิ่งใหม่ ๆ มาตั้งแต่เด็ก และได้ลองทำกิจกรรมหลากหลาย เช่น เล่นกีฬา ฟุตบอล วอลเลย์บอล การแสดงหนังสั้น วาดภาพ และใช้คอมพิวเตอร์ตามร้านอินเทอร์เน็ตเป็นประจำ จนกระทั่งผมมีโอกาสได้เข้าร่วมงาน Open House ของมหาวิทยาลัยขอนแก่น ซึ่งทำให้ผมเกิดความสนใจในคณะเทคโนโลยีสารสนเทศ เพราะมันตอบสนองความฝันในวัยเด็กที่ผมอยากจะสร้างเกมแนว MMORPG รวมถึงการเรียนรู้เพิ่มเติมเกี่ยวกับคอมพิวเตอร์และการเขียนโค้ดให้ลึกซึ้งยิ่งขึ้น</p>
                <br/>
                <p className='about-me'>
                วิทยาการคอมพิวเตอร์ เป็นหลักสูตรที่ตรงกับความชอบและความถนัดของผมมากที่สุด หลักสูตรนี้ครอบคลุมเนื้อหาหลากหลาย เช่น การเขียนโปรแกรม มัลติมีเดีย และอีกหลายด้าน ซึ่งผมเชื่อว่ามหาวิทยาลัยขอนแก่นมีความพร้อมในเรื่องการเรียนการสอน และมีสภาพแวดล้อมที่เหมาะสม ทำให้ผมตัดสินใจเลือกที่นี่เพื่อตอบโจทย์ความต้องการในการเรียนรู้สิ่งใหม่ ๆ ของผม นอกจากนี้ ผมมั่นใจว่าสถาบันแห่งนี้จะมอบความรู้และประสบการณ์ที่มีคุณค่าให้กับผมอย่างแน่นอน
                <br/>
                <br/>
                ผมเริ่มเรียนรู้และเขียนโค้ดมาตั้งแต่เดือนธันวาคม พ.ศ. 2566 เพื่อพัฒนาเว็บไซต์ของตัวเอง และมุ่งมั่นที่จะพัฒนาทักษะการเขียนเว็บ รวมถึงความสามารถทางด้านคอมพิวเตอร์ของผมอย่างต่อเนื่อง เพื่อให้บรรลุเป้าหมายในอนาคต ผมเป็นคนที่สามารถรับความกดดันได้ดี มีความรับผิดชอบสูง และทำงานเป็นทีมได้อย่างมีประสิทธิภาพ
                <br/>
                <br/>
                ในอนาคตที่โลกดิจิทัลกำลังเติบโตอย่างรวดเร็ว บริษัทต่าง ๆ ต้องการโปรแกรมเมอร์ที่มีความสามารถและพร้อมรับความท้าทาย ผมต้องการใช้ความสามารถและความพยายามของตัวเองให้เกิดประโยชน์ทั้งต่อสถาบันและโลกยุคใหม่ที่กำลังจะมาถึง
                </p> 

                <div className="social-links-container">
                    <a className="social-links" href="">
                        <FontAwesomeIcon icon={faLinkedin} className="fa-1x socail-icons" />
                    </a>
                    <a className="social-links" href="">
                        <FontAwesomeIcon icon={faGithub} className="fa-1x socail-icons" />
                    </a>
                    <a className="social-links" href="">
                        <FontAwesomeIcon icon={faDiscord} className="fa-1x socail-icons" />
                    </a>
                    <a className="social-links" href="https://www.facebook.com/narongdach.bass">
                        <FontAwesomeIcon icon={faFacebook} className="fa-1x socail-icons" />
                    </a>
                    <a className="social-links" href="https://x.com/muixx50?s=09">
                        <FontAwesomeIcon icon={faTwitter} className="fa-1x socail-icons" />
                    </a>
                </div>

                {/* First Avatar image with click event */}
                <img
                    src={currentImage}
                    alt="avatar image"
                    className="rounded-circle img-fluid swipe-image"
                    style={{
                        width: '180px',
                        height: '180px',
                        cursor: 'pointer',
                        objectFit: 'cover',
                        border: '4px solid transparent',
                        position: 'relative',
                        animation: 'innerBorderAnimation 1s infinite alternate, outerRingAnimation 4s infinite linear',
                    }}
                    onClick={handleImageClick}
                />

                {/* Second Avatar image with click event */}
                <img
                    src={currentImage2}
                    alt="second avatar image"
                    className="rounded-circle img-fluid swipe-image"
                    style={{
                        width: '180px',
                        height: '180px',
                        cursor: 'pointer',
                        objectFit: 'cover',
                        border: '4px solid transparent',
                        position: 'relative',
                        marginLeft: '50px', // Adjust this value to reduce space between images
                        animation: 'innerBorderAnimation 1s infinite alternate, outerRingAnimation 5s infinite linear',
                    }}
                    onClick={handleImage2Click}
                />

                {/* Render text box conditionally */}
                {showTextBox && (
                    <div className="text-box cartoon-bubble">
                        <p>{randomText}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default About;
