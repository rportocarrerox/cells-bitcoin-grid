{
  const {
    html,
  } = Polymer;
  /**
    `<cells-bitcoin-grid>` Description.

    Example:

    ```html
    <cells-bitcoin-grid></cells-bitcoin-grid>
    ```

    ## Styling
    The following custom properties and mixins are available for styling:

    ### Custom Properties
    | Custom Property     | Selector | CSS Property | Value       |
    | ------------------- | -------- | ------------ | ----------- |
    | --cells-fontDefault | :host    | font-family  |  sans-serif |
    ### @apply
    | Mixins    | Selector | Value |
    | --------- | -------- | ----- |
    | --cells-bitcoin-grid | :host    | {} |

    * @customElement
    * @polymer
    * @extends {Polymer.Element}
    * @demo demo/index.html
  */
  class CellsBitcoinGrid extends Polymer.Element {

    static get is() {
      return 'cells-bitcoin-grid';
    }

    static get properties() {
      return {
        headers: { type: Array, value: [{
          label: ''
        }, {
          label: 'price',
          id: 'price',
          sortable: true
        }, {
          label: 'description',
          id: 'description',
          sortable: false
        }]},

        rows: { type: Array, notify: true, value: [], observer: 'cambio' }
      };
    }


    cambio() {
      console.log('cambio', this.rows);
    }

    listBitcoinPrices(evt){
      this.rows = [];
      this.rows = evt;
    }

    actionChart(){
      this.dispatchEvent(new Event('show-historical-chart'));
    }

    static get template() {

      return html `

          <cells-sortable-table class="simple" show-sort-buttons sort-by="price" rows="[[rows]]" column-headers="[[headers]]">
          </cells-sortable-table>
          <center>
            <cells-st-button>
              <button on-click="actionChart">Ver Chart</button>
            </cells-st-button>
          </center>
      
      `;
    }
  }

  customElements.define(CellsBitcoinGrid.is, CellsBitcoinGrid);
}