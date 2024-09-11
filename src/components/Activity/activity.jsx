import { Container, Row, Col } from 'react-bootstrap';
import './activity.css';
import liberThumbNail from '../../assets/liberThumbnail.png'; // ใช้ไฟล์รูปภาพตัวอย่าง

const Activity = () => {
    return (
        <div id="activity">
            {/* Container for the colored background */}
            <div className="activity-header-container">
                <h1 className='activity-title'>กิจกรรมที่สำคัญ</h1>
                <h2 className='activity-header'><span className='emoji'>🎯</span> รายละเอียดกิจกรรมที่เคยเข้าร่วม</h2>
            </div>
            <Container style={{ marginTop: '50px' }}>
                {/* First Row - Image on Left, Text on Right */}
                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={liberThumbNail}
                            alt="liber reader project"
                            className="rounded-image"
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>กิจกรรมรับเกียรติบัตรความดีแบบ VeryGood</h3>
                            <p className='proj-text'>
                            ได้รับเกียรติบัตรความดีในวีนที่ 13 กันยายน 2022 การเป็นคนซื่อสัตย์ควนอยู่ในจิตสำนึกอยุ่ในสังคมไทย ก่อนจะได้รับเกียรติบัตรนี้มาผมได้เก็บโทรศัพท์และกระเป๋าเงินไปประกาศคืนเจ้าของ
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Second Row - Text on Left, Image on Right */}
                <Row className='each-proj'>
                    <Col xs={12} md={{ span: 6, order: 2 }} className="d-flex align-items-center justify-content-center">
                        <img
                            src={liberThumbNail}
                            alt="liber reader project"
                            className="rounded-image"
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col xs={12} md={{ span: 6, order: 1 }} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>รับเกียรติบัตร IS</h3>
                            <p className='proj-text'>
                            วันรับเกียรติบัตรได้รับประสบการณ์จากงานนี้อย่างมากมายเช่นความอดทน ความเหนื่อย และในกิจกรรมนี้ทำให้ผมได้ดึงสกิลหลายๆอย่างมาใช้เช่นกรนำเสนอ และ การแก้ไขปัญหาโครงงานการออกแบบ การใช้งานฝีมือและผมได้รู้ว่าผมชอบออกแบบด้วย การนำเสนอโคงงาน IS ในครั้งนี้ทำให้ผมได้พัฒนาสกิลที่มีอยู่และได้รับสกิลใหม่ๆมาใช่กัน
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={liberThumbNail}
                            alt="liber reader project"
                            className="rounded-image"
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>ลงสมัครสภานักเรียน</h3>
                            <p className='proj-text'>
                            ลงสมัครสภานักเรียนปี 2566 ได้รับประสบการณ์มากมายได้เรียนรู้การทำงานเป็นทีมและได้เรียนรู้ความผิดพลาดในการจัดการเวลา การลงสมัครสภานักเรียนครั้งนี้ทำให้ผมเรียนรู้อะไรหลายอย่างได้ปรับมุมมองความคิดและได้รู้ว่าจริงๆแล้วผมมีความสามารถในการพูดการนำเสนอนโยบายได้ในระดับที่ดีและได้นำข้อผิดพลาดหลายอย่างมาแก้ไขและปรับใช้ทำให้ตัวเองเติบโตอย่างมีประสิทธิภาพ
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Second Row - Text on Left, Image on Right */}
                <Row className='each-proj'>
                    <Col xs={12} md={{ span: 6, order: 2 }} className="d-flex align-items-center justify-content-center">
                        <img
                            src={liberThumbNail}
                            alt="liber reader project"
                            className="rounded-image"
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col xs={12} md={{ span: 6, order: 1 }} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>English Comp</h3>
                            <p className='proj-text'>
                            เข้าร่วมEnglish Comp  ปี2567 ได้รับความรู้และหลักการใช้ภาษาอังกฤษมากขึ้นพัฒนาการใช้ที่ แกรมม่าและรู้จักlinking sound ได้ติวข้อสอบ
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={liberThumbNail}
                            alt="liber reader project"
                            className="rounded-image"
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>Open house ขอนแก่น+จิตอาสา</h3>
                            <p className='proj-text'>
                            เข้าร่วม Open house ได้รับความรู้และหลักการใช้ภาษาอังกฤษมากขึ้นพัฒนาการใช้ที่ แกรมม่าและรู้จักlinking sound ได้ติวข้อสอบ
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Second Row - Text on Left, Image on Right */}
                <Row className='each-proj'>
                    <Col xs={12} md={{ span: 6, order: 2 }} className="d-flex align-items-center justify-content-center">
                        <img
                            src={liberThumbNail}
                            alt="liber reader project"
                            className="rounded-image"
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col xs={12} md={{ span: 6, order: 1 }} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>Open house ราชภัทร</h3>
                            <p className='proj-text'>
                            เข้าร่วมEnglish Comp  ปี2567 ได้รับความรู้และหลักการใช้ภาษาอังกฤษมากขึ้นพัฒนาการใช้ที่ แกรมม่าและรู้จักlinking sound ได้ติวข้อสอบ 
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Add more projects following the same alternating pattern */}
            </Container>
        </div>
    );
};

export default Activity;
