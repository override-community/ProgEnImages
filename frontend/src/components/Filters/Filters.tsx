import { CARDLIST } from "../../data/cardlist";
import { useMemo, useContext } from "react";
import { formatCategories } from "./utils";
import { Form, Row, Col } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
import style from "./Filters.module.scss";
import { Select } from "../../ui/Select/Select";

export function Filters() {
  const categories = useMemo(() => formatCategories(CARDLIST), []);

  const { setSelectedCategory, setSearch } = useContext(AppContext);

  return (
    <section className={style.filters}>
      <h2>Filtres</h2>
      <Row>
        <Col xs={12} md={4}>
          <Select
            label='Categorie'
            options={categories}
            onChange={setSelectedCategory}
          />
        </Col>
        <Col xs={12} md={4}>
          <Form.Label>Trier par: </Form.Label>
          <Form.Select disabled>
            <option value='Pas implémenté'>Pas implémenté</option>
          </Form.Select>
        </Col>
        <Col xs={12} md={4}>
          <Form.Label htmlFor='search'>Recherche: </Form.Label>
          <Form.Control
            type='text'
            placeholder='Recherche'
            id='search'
            onChange={(e) => setSearch(e.target.value)}
          />
          <Form.Text id='searchHelpText' muted>
            Recherche par nom, description, auteur
          </Form.Text>
        </Col>
      </Row>
    </section>
  );
}
