<div class='col-md-12'>

  <div class='input-append'>
    <legend> <span>Your URL</span> </legend>
    <input id='createShortcutInput' class='span2' type='text' maxLength='2000' autoFocus/>
    <button id='createShortcutBtn' class='btn' type='button'>Go!</button>
  </div>

  {{#shortcut.id}}
    <div class="input-append">
        <legend>
            <i class='icon'></i>
            <span>Your Shortcut</span>
        </legend>
        <span class="help-block">
          {{ shortcut.url }}
        </span>
        <input class="span2" type="text"
          value="{{ shortcut.base }}/{{ shortcut.id }}" readOnly>
        </input>
      </div>
  {{/shortcut.id}}

</div>
