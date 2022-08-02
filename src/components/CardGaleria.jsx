import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CardGaleria.css"
import { Data } from './Data';

const CardTitle = () => {
  return <>
    <div class="classCard">
      <Card style={{ width: "30rem" }}>
        {Data.map((item) => (
          <div key={item.id}>
            <Card.Img variant="top" src={item.src} alt={item.name} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <Button variant="primary">Ver más</Button>
            </Card.Body>
          </div>
        ))}

      </Card>
    </div>
  </>
}

export default CardTitle;




