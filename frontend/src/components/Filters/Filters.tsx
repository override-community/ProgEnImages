import { CARDLIST } from "../../data/cardlist";
import { useMemo, useContext } from "react";
import { formatCategories } from "./utils";
import { Form, Row, Col } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
import { Select } from "../../ui/Select/Select";
import { Locale, LocaleContext } from "../../context/LocaleContext";
import style from "./Filters.module.scss";
import contents from "../../contents.json";
import { Input } from "../../ui/Input";

export function Filters() {
  const categories = useMemo(() => formatCategories(CARDLIST), []);
  const { locale } = useContext(LocaleContext);
  const { setSelectedCategory, setSearch } = useContext(AppContext);
  const contentsLocale = contents[locale as Locale];

  return (
    <section className={style.filters}>
      <h2>{contentsLocale.filters.title}</h2>
      <Row>
        <Col xs={12} md={4}>
          <Select
            label={contentsLocale.filters.labels.category}
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
          <Input
            onChange={setSearch}
            label={contentsLocale.filters.labels.search}
            helpertext={contentsLocale.filters.searchHelp}
          />
        </Col>
      </Row>
    </section>
  );
}
