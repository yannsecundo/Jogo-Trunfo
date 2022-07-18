import React, { Component } from 'react';

export class FormCard extends Component {
  render() {
    return (
      <div>
        <h2>Adicionar Nova Carta</h2>
        <form>
          <input
            type="text"
            data-testid="name-input"
          />
          <br />
          <input
            type="textarea"
            data-testid="description-input"
          />
          <br />
          <input
            type="number"
            data-testid="attr1-input"
          />
          <br />
          <input
            type="number"
            data-testid="attr2-input"
          />
          <br />
          <input
            type="number"
            data-testid="attr3-input"
          />
          <br />
          <input
            type="text"
            data-testid="image-input"
          />
          <br />
          <select
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          <br />
          <input
            type="checkbox"
            data-testid="trunfo-input"
          />
          <br />
          <button type="submit" data-testid="save-button">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default FormCard;
