<div class='col-md-12'>
  <table class="table">
      <tbody>

        <tr>
          <th> your shortcut </th>
          <th> original url </th>
          <th> timestamp </th>
        </tr>

        {{#shortcuts}}
              <tr>
                <td>
                  <i class='icon'></i>
                  <span> {{ base }}/{{ id }} </span>
                </td>
                <td>
                  <span> {{ url }} </span>
                </td>
                <td>
                  <span> {{ timestamp }} </span>
                </td>
              </tr>
        {{/shortcuts}}
      </tbody>
  </table>
</div>
