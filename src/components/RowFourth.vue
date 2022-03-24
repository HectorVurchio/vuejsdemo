<template>
  <div class="form-row-1">
    <div class="hor-col-1">
      <label><span>Hydrous bioethanol E90W10 LHV:</span><span>*</span></label>
    </div>
    <div class="hor-col-2">
      <input type="text" id="hydrous-bioethanol" maxlength="12" />
      <label for="hydrous-bioethanol">J/mg</label>
    </div>
  </div>
  <div class="form-row-1">
    <div class="hor-col-1">
      <label><span>Notes:</span><span></span></label>
    </div>
    <div class="hor-col-2">
      <textarea id="notes" maxlength="250"></textarea>
    </div>
  </div>
</template>
<script>
export default {
  name: "RowFour",
  props: {},
};
</script>
