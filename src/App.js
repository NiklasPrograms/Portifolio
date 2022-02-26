import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col} from "react-bootstrap";
import PortraitCard from './PortraitCard';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          Lorem ipsum dolor sit amet, nam te munere cotidieque, cu odio aliquip phaedrum pri, idque laoreet vel ut. Mel civibus deleniti temporibus ea. No nam prima consequuntur. Per ut probo mucius recteque. An posse aeterno mel, assum erant sonet quo ex.
          Dicat postulant ad per, dico nulla propriae cu usu, ea duo magna mandamus. Has suas idque an, at soluta delicata eam. At ius sumo nusquam efficiendi. Sale iriure concludaturque ad his. Id sed dicta verear, quidam tamquam abhorreant ut sit. Utroque accumsan eos ex, cum ferri vulputate ne.
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          Cetero utroque eum ex. Case adipisci expetenda et mel, est an legere commodo tractatos, cu iuvaret splendide dissentias mea. Omnis fugit assueverit his no, scaevola apeirian has ei, eu alii conclusionemque eos. Rationibus conclusionemque eam ne, qui clita maiorum eu.
          Civibus concludaturque cu mei. At est primis scripserit, patrioque reformidans te his, vix aeterno nostrud et. Vel sadipscing persequeris ut, ea mea ornatus inimicus temporibus. Eam id exerci pericula.
          Ea ius feugiat epicuri molestiae. Has impetus gloriatur ex, an dicat erant commune vim. Et qui nulla tibique oporteat, in habeo adhuc dissentiet eum. His persius appareat eu.
          Donec a elementum mi, ac dictum risus. Sed pulvinar gravida augue eu mattis. Cras felis lectus, fringilla a ornare vel, sollicitudin quis leo. Nunc vehicula elementum lorem sit amet condimentum. In massa leo, rhoncus sit amet condimentum ac, hendrerit nec mauris. Aenean faucibus neque nec tortor euismod hendrerit. In bibendum hendrerit blandit. Pellentesque finibus pellentesque euismod. Nullam tortor ipsum, dapibus eu accumsan sed, ornare eget odio. Nam sollicitudin enim nulla. Curabitur justo ligula, venenatis ut facilisis interdum, laoreet ac ex.
          Nulla urna libero, efficitur sit amet nisi a, mattis imperdiet est. Nulla ac aliquam eros. Proin posuere nibh ac nulla hendrerit luctus. Pellentesque finibus bibendum dui finibus imperdiet. Integer vestibulum, risus non consequat sollicitudin, lorem est pretium orci, porta sollicitudin dui felis et turpis. Nunc venenatis nulla elit, a tempor lectus tincidunt et.  
        </Col>
        <Col lg="4">
          <PortraitCard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;