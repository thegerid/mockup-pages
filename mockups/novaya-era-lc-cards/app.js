const needsRows = [
  {
    id: "LC3009150099",
    region: "Москва",
    city: "Москва",
    supplyBlock: "beeline",
    lcName: "ЛЦ Билайн",
    responsibleName: "Павлова Елена Игоревна",
    responsiblePhone: "+79876543210",
    deliveryType: "Постамат",
    deliveryBadgeLabel: "ЛЦ",
    deliveryAddress: "ул. 8 Марта, 14, ЛЦ Билайн",
    operationType: "new",
    needQty: 7000,
    stockDays: 15,
    daysToDelivery: 2,
    geo: { x: 46, y: 36 },
    cardTypes: ["8K", "FAG", "R6", "7S", "N9", "R7"],
  },
  {
    id: "LC3009150001",
    region: "Москва",
    city: "Москва",
    supplyBlock: "mobile",
    banker: "Московский Михаил Михайлович",
    groupLead: "Лебедев Артем Вадимович",
    deliveryType: "Постамат",
    deliveryAddress: "ул. Тверская, 7, постамат 0132",
    operationType: "new",
    needQty: 320,
    daysToDelivery: 2,
    geo: { x: 47, y: 38 },
    cardTypes: ["8K", "FAG", "R6", "7S", "R6", "N9", "R6", "7S", "7S", "R7"],
  },
  {
    id: "LC3009150002",
    region: "Москва",
    city: "Химки",
    supplyBlock: "mobile",
    banker: "Смирнова Анна Сергеевна",
    groupLead: "Лебедев Артем Вадимович",
    deliveryType: "Дом",
    deliveryAddress: "ул. Молодежная, 12к2, кв. 48",
    operationType: "reissue",
    needQty: 110,
    daysToDelivery: 5,
    geo: { x: 58, y: 33 },
    cardTypes: ["R6", "R6", "7S", "R7"],
  },
  {
    id: "LC3009150003",
    region: "Северо-запад",
    city: "Санкт-Петербург",
    supplyBlock: "mobile",
    banker: "Петров Илья Андреевич",
    groupLead: "Ковалева Мария Дмитриевна",
    deliveryType: "Постамат",
    deliveryAddress: "Лиговский проспект, 35, постамат 272",
    operationType: "new",
    needQty: 75,
    daysToDelivery: 3,
    geo: { x: 39, y: 42 },
    cardTypes: ["FAG", "N9", "R7"],
  },
  {
    id: "LC3009150004",
    region: "Северо-запад",
    city: "Гатчина",
    supplyBlock: "mobile",
    banker: "Николаева Дарья Игоревна",
    groupLead: "Ковалева Мария Дмитриевна",
    deliveryType: "Дом",
    deliveryAddress: "пр. 25 Октября, 14, кв. 19",
    operationType: "new",
    needQty: 60,
    daysToDelivery: 9,
    geo: { x: 33, y: 55 },
    cardTypes: ["7S", "7S", "R6"],
  },
  {
    id: "LC3009150005",
    region: "Дальневосточный",
    city: "Владивосток",
    supplyBlock: "mobile",
    banker: "Козлов Сергей Павлович",
    groupLead: "Бурмистров Павел Алексеевич",
    deliveryType: "Постамат",
    deliveryAddress: "Светланская, 51, постамат 44",
    operationType: "new",
    needQty: 140,
    daysToDelivery: 1,
    geo: { x: 66, y: 44 },
    cardTypes: ["8K", "FAG", "R6", "R6", "R7"],
  },
  {
    id: "LC3009150006",
    region: "Дальневосточный",
    city: "Хабаровск",
    supplyBlock: "mobile",
    banker: "Романова Ирина Евгеньевна",
    groupLead: "Бурмистров Павел Алексеевич",
    deliveryType: "Дом",
    deliveryAddress: "ул. Карла Маркса, 83, кв. 102",
    operationType: "reissue",
    needQty: 55,
    daysToDelivery: 6,
    geo: { x: 54, y: 49 },
    cardTypes: ["N9", "R7", "R6"],
  },
];

let inWorkRows = [
  {
    id: "WK3009151001",
    region: "Москва",
    city: "Мытищи",
    banker: "Герасимов Денис Игоревич",
    groupLead: "Лебедев Артем Вадимович",
    deliveryType: "Дом",
    deliveryAddress: "ул. Летная, 28, кв. 61",
    operationType: "new",
    needQty: 90,
    daysToDelivery: 2,
    stockDays: 7,
    workStatus: "В работе",
    cardTypes: ["R6", "R6", "7S", "R7"],
  },
  {
    id: "WK3009151002",
    region: "Москва",
    city: "Зеленоград",
    banker: "Соколова Ирина Викторовна",
    groupLead: "Лебедев Артем Вадимович",
    deliveryType: "Постамат",
    deliveryAddress: "корп. 1550, постамат 15",
    operationType: "reissue",
    needQty: 48,
    daysToDelivery: 3,
    stockDays: 6,
    workStatus: "Передано в доставку",
    cardTypes: ["FAG", "N9", "R7"],
  },
  {
    id: "WK3009151003",
    region: "Северо-запад",
    city: "Мурино",
    banker: "Егоров Павел Андреевич",
    groupLead: "Ковалева Мария Дмитриевна",
    deliveryType: "Дом",
    deliveryAddress: "ул. Шувалова, 10, кв. 77",
    operationType: "new",
    needQty: 64,
    daysToDelivery: 4,
    stockDays: 5,
    workStatus: "Доставляется",
    cardTypes: ["8K", "R6", "7S"],
  },
  {
    id: "WK3009151004",
    region: "Дальневосточный",
    city: "Находка",
    banker: "Беляев Андрей Сергеевич",
    groupLead: "Бурмистров Павел Алексеевич",
    deliveryType: "Постамат",
    deliveryAddress: "Находкинский пр., 1, постамат 07",
    operationType: "new",
    needQty: 36,
    daysToDelivery: 1,
    stockDays: 3,
    workStatus: "Готов к получению",
    cardTypes: ["N9", "R7", "FAG"],
  },
  {
    id: "WK3009151005",
    region: "Дальневосточный",
    city: "Владивосток",
    banker: "Ильин Александр Романович",
    groupLead: "Бурмистров Павел Алексеевич",
    deliveryType: "Дом",
    deliveryAddress: "ул. Русская, 5, кв. 204",
    operationType: "reissue",
    needQty: 72,
    daysToDelivery: 5,
    stockDays: 2,
    workStatus: "Доставлено",
    cardTypes: ["R6", "R6", "7S", "7S", "R7"],
  },
];

let workIdCounter = 3009152000;

const REGION_OPTIONS = ["Дальневосточный", "Москва", "Северо-запад"];
const ALL_CHECKBOX_VALUE = "__all__";

const FILTER_META = {
  region: { caption: "Не выбрано" },
  city: { caption: "Не выбрано" },
  deliveryBand: { caption: "Дни до доставки" },
  deliveryType: { caption: "Тип доставки" },
  deliveryStatus: { caption: "Статус доставки" },
};

const STATIC_FILTER_OPTIONS = {
  deliveryBand: [
    { value: "short", label: "0-3 дн." },
    { value: "medium", label: "4-7 дн." },
    { value: "long", label: "8+ дн." },
  ],
  deliveryType: [
    { value: "Дом", label: "Дом" },
    { value: "Постамат", label: "Постамат" },
  ],
  deliveryStatus: [
    { value: "В работе", label: "В работе" },
    { value: "Передано в доставку", label: "Передано в доставку" },
    { value: "Доставляется", label: "Доставляется" },
    { value: "Готов к получению", label: "Готов к получению" },
    { value: "Доставлено", label: "Доставлено" },
  ],
};

const FILTER_IDS = Object.keys(FILTER_META);

const state = {
  tab: "table",
  generated: false,
  selectedPinId: "",
  openFilter: "",
  citySearch: "",
  expandedRows: [],
  filters: {
    region: [],
    city: [],
    deliveryBand: [],
    deliveryType: [],
    deliveryStatus: [],
  },
  appliedFilters: {
    region: [],
    city: [],
    deliveryBand: [],
    deliveryType: [],
    deliveryStatus: [],
  },
};

const generateBtn = document.getElementById("generateBtn");
const content = document.getElementById("content");
const toast = document.getElementById("toast");
const tabButtons = Array.from(document.querySelectorAll("[data-tab]"));
const filterButtons = Array.from(document.querySelectorAll("[data-filter-trigger]"));

function getAllRows() {
  return [...needsRows, ...inWorkRows];
}

function unique(list) {
  return Array.from(new Set(list)).sort((a, b) => a.localeCompare(b, "ru"));
}

function selectedRegionsWithoutAll() {
  return state.filters.region;
}

function getVisibleCityOptions(baseOptions) {
  const search = state.citySearch.trim().toLowerCase();
  if (!search) return baseOptions;
  return baseOptions.filter((item) => item.label.toLowerCase().includes(search));
}

function getFilterOptions(filterId) {
  if (filterId === "region") {
    return REGION_OPTIONS.map((value) => ({ value, label: value }));
  }

  if (filterId === "city") {
    let source = getAllRows();
    const selectedRegions = selectedRegionsWithoutAll();
    if (selectedRegions.length) {
      source = source.filter((row) => selectedRegions.includes(row.region));
    }
    return unique(source.map((row) => row.city)).map((value) => ({ value, label: value }));
  }

  return STATIC_FILTER_OPTIONS[filterId] || [];
}

function isFilterEnabled(filterId) {
  if (filterId === "region") return true;
  if (filterId === "city") return state.filters.region.length > 0;
  return state.filters.region.length > 0;
}

function clearFilter(filterId) {
  state.filters[filterId] = [];
}

function cloneFilters(source) {
  const copy = {};
  FILTER_IDS.forEach((filterId) => {
    copy[filterId] = [...(source[filterId] || [])];
  });
  return copy;
}

function normalizeFilterSelections() {
  FILTER_IDS.forEach((filterId) => {
    if (!isFilterEnabled(filterId)) {
      if (!state.generated) {
        clearFilter(filterId);
        if (filterId === "city") state.citySearch = "";
        if (state.openFilter === filterId) state.openFilter = "";
      }
      return;
    }

    if (!state.generated) {
      const validValues = new Set(getFilterOptions(filterId).map((item) => item.value));
      state.filters[filterId] = state.filters[filterId].filter((value) => validValues.has(value));
    }
  });
}

function getFilterCaption(filterId) {
  const selected = state.filters[filterId];
  if (!selected.length) return FILTER_META[filterId].caption;

  const options = getFilterOptions(filterId);
  if (options.length && selected.length === options.length) return "Все";

  const labelMap = new Map(options.map((item) => [item.value, item.label]));
  const labels = selected.map((value) => labelMap.get(value) || value);
  if (labels.length === 1) return labels[0];
  return `${labels[0]} +${labels.length - 1}`;
}

function hasRequiredPrimaryFilters() {
  return state.filters.region.length > 0;
}

function syncGenerateState() {
  generateBtn.disabled = !hasRequiredPrimaryFilters();
}

function renderFilterControls() {
  normalizeFilterSelections();
  syncGenerateState();

  FILTER_IDS.forEach((filterId) => {
    const block = document.querySelector(`[data-filter="${filterId}"]`);
    const trigger = block ? block.querySelector("[data-filter-trigger]") : null;
    const caption = block ? block.querySelector("[data-filter-caption]") : null;
    const dropdown = block ? block.querySelector("[data-filter-dropdown]") : null;
    if (!block || !trigger || !caption || !dropdown) return;

    const enabled = isFilterEnabled(filterId);
    const open = enabled && state.openFilter === filterId;
    const baseOptions = getFilterOptions(filterId);
    const options = baseOptions.length ? [{ value: ALL_CHECKBOX_VALUE, label: "Все", isAll: true }, ...baseOptions] : [];
    const selectedSet = new Set(state.filters[filterId]);
    const allChecked = baseOptions.length > 0 && baseOptions.every((item) => selectedSet.has(item.value));

    block.classList.toggle("disabled", !enabled);
    block.classList.toggle("open", open);
    trigger.disabled = !enabled;
    trigger.setAttribute("aria-expanded", String(open));
    caption.textContent = getFilterCaption(filterId);

    if (!enabled) {
      dropdown.innerHTML = "";
      return;
    }

    if (filterId === "city") {
      const visibleCityOptions = getVisibleCityOptions(baseOptions);

      dropdown.innerHTML = `
        <div class="city-dropdown">
          <label class="city-search">
            <span class="city-search-icon">⌕</span>
            <input type="text" data-city-search value="${state.citySearch.replace(/"/g, "&quot;")}" placeholder="Поиск">
          </label>
          <div class="city-options">
            ${
              visibleCityOptions.length
                ? `
                  <label class="filter-option">
                    <input type="checkbox" data-filter-check="${filterId}" value="${ALL_CHECKBOX_VALUE}" ${allChecked ? "checked" : ""}>
                    <span>Все</span>
                  </label>
                  ${visibleCityOptions
                    .map((item) => {
                      const checked = selectedSet.has(item.value);
                      return `
                        <label class="filter-option">
                          <input type="checkbox" data-filter-check="${filterId}" value="${item.value}" ${checked ? "checked" : ""}>
                          <span>${item.label}</span>
                        </label>
                      `;
                    })
                    .join("")}
                `
                : '<div class="city-empty">Ничего не нашлось</div>'
            }
          </div>
        </div>
      `;

      const searchInput = dropdown.querySelector("[data-city-search]");
      if (searchInput) {
        searchInput.addEventListener("click", (event) => event.stopPropagation());
        searchInput.addEventListener("input", () => {
          const cursorPos = searchInput.selectionStart ?? searchInput.value.length;
          state.citySearch = searchInput.value || "";
          renderFilterControls();
          const nextInput = document.querySelector('[data-filter-dropdown="city"] [data-city-search]');
          if (nextInput) {
            const nextPos = Math.min(cursorPos, nextInput.value.length);
            nextInput.focus();
            nextInput.setSelectionRange(nextPos, nextPos);
          }
        });
      }

      dropdown.querySelectorAll(`[data-filter-check="${filterId}"]`).forEach((checkbox) => {
        checkbox.addEventListener("click", (event) => event.stopPropagation());
        checkbox.addEventListener("change", () => {
          toggleFilterValue(filterId, checkbox.value, checkbox.checked);
        });
      });
      return;
    }

    dropdown.innerHTML = options.length
      ? options
          .map((item) => {
            const checked = item.isAll ? allChecked : selectedSet.has(item.value);
            return `
              <label class="filter-option">
                <input type="checkbox" data-filter-check="${filterId}" value="${item.value}" ${checked ? "checked" : ""}>
                <span>${item.label}</span>
              </label>
            `;
          })
          .join("")
      : '<div class="filter-empty">Нет доступных вариантов</div>';

    dropdown.querySelectorAll(`[data-filter-check="${filterId}"]`).forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        toggleFilterValue(filterId, checkbox.value, checkbox.checked);
      });
    });
  });
}

function toggleFilterValue(filterId, value, checked) {
  const baseOptions = getFilterOptions(filterId);
  const allowed = new Set(baseOptions.map((item) => item.value));
  let selected = [...state.filters[filterId]].filter((item) => allowed.has(item));

  if (value === ALL_CHECKBOX_VALUE) {
    selected = checked ? baseOptions.map((item) => item.value) : [];
  } else if (checked) {
    if (!selected.includes(value)) selected.push(value);
  } else {
    selected = selected.filter((item) => item !== value);
  }

  state.filters[filterId] = selected;
  if (filterId === "region") {
    state.citySearch = "";
  }

  renderFilterControls();
  renderCurrentState();
}

function operationLabel(type) {
  return type === "reissue" ? "Перевыпуск" : "Новая выдача";
}

function deliveryTypeBadge(row) {
  const label = row.deliveryBadgeLabel || row.deliveryType;
  let cls = "delivery-locker";
  if (label === "ЛЦ") cls = "delivery-lc";
  else if (row.deliveryType === "Дом") cls = "delivery-home";
  return `<span class="badge delivery-badge ${cls}">${label}</span>`;
}

function deliveryAddressCell(row) {
  return `
    <div class="cell-content address-cell">
      ${deliveryTypeBadge(row)}
      <span>${row.city}, ${row.deliveryAddress}</span>
    </div>
  `;
}

function responsibleCell(row) {
  const name = row.responsibleName || "—";
  const phone = row.responsiblePhone || "—";
  return `
    <div class="cell-content contact-cell">
      <span>${name}</span>
      <span class="contact-phone">${phone}</span>
    </div>
  `;
}

function workStatusBadge(status) {
  if (status === "В работе") return '<span class="badge warn">В работе</span>';
  if (status === "Передано в доставку") return '<span class="badge info">Передано в доставку</span>';
  if (status === "Доставляется") return '<span class="badge neutral">Доставляется</span>';
  if (status === "Готов к получению") return '<span class="badge info">Готов к получению</span>';
  return '<span class="badge danger">Доставлено</span>';
}

function ensureDeliveryTrack(row) {
  if (row.workStatus !== "Доставляется") return "";
  if (row.deliveryTrack) return row.deliveryTrack;
  const randomPart = Math.floor(100000000000 + Math.random() * 900000000000);
  row.deliveryTrack = `TRK-${randomPart}`;
  return row.deliveryTrack;
}

function renderWorkStatusCell(row, expanded) {
  const track = ensureDeliveryTrack(row);
  return `
    <div class="cell-content status-cell">
      ${workStatusBadge(row.workStatus)}
      ${
        expanded && track
          ? `
            <span class="status-track">
              <span class="status-track-label">Трек-номер</span>
              <span class="status-track-value" data-copy-track="${track}" title="Нажмите, чтобы скопировать">${track}</span>
            </span>
          `
          : ""
      }
    </div>
  `;
}

async function copyTrackNumber(track) {
  if (!track) return false;
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(track);
      return true;
    }
  } catch (error) {
    // Fallback below for restricted clipboard permissions.
  }

  const tempInput = document.createElement("input");
  tempInput.value = track;
  tempInput.style.position = "fixed";
  tempInput.style.opacity = "0";
  tempInput.style.pointerEvents = "none";
  document.body.appendChild(tempInput);
  tempInput.focus();
  tempInput.select();
  const copied = document.execCommand("copy");
  tempInput.remove();
  return copied;
}

function matchDeliveryBand(daysToDelivery, band) {
  if (band === "short") return daysToDelivery <= 3;
  if (band === "medium") return daysToDelivery >= 4 && daysToDelivery <= 7;
  if (band === "long") return daysToDelivery >= 8;
  return false;
}

function rowMatchesFilters(row, filters) {
  if (filters.region.length && !filters.region.includes(row.region)) return false;
  if (filters.city.length && !filters.city.includes(row.city)) return false;
  if (filters.deliveryType.length && !filters.deliveryType.includes(row.deliveryType)) return false;
  if (filters.deliveryStatus.length && row.workStatus && !filters.deliveryStatus.includes(row.workStatus)) return false;
  if (
    filters.deliveryBand.length &&
    !filters.deliveryBand.some((band) => matchDeliveryBand(row.daysToDelivery, band))
  ) {
    return false;
  }
  return true;
}

function filteredRows() {
  if (!state.generated) return [];
  return needsRows.filter((row) => rowMatchesFilters(row, state.appliedFilters));
}

function filteredInWorkRows() {
  if (!state.generated) return [];
  return inWorkRows.filter((row) => rowMatchesFilters(row, state.appliedFilters));
}

function toastMessage(text) {
  toast.textContent = text;
  toast.classList.add("visible");
  clearTimeout(toastMessage.timer);
  toastMessage.timer = setTimeout(() => toast.classList.remove("visible"), 1600);
}

function countCardTypes(cardTypes) {
  const map = new Map();
  cardTypes.forEach((code) => {
    map.set(code, (map.get(code) || 0) + 1);
  });
  return Array.from(map.entries()).map(([code, qty]) => ({ code, qty }));
}

function distributeCardCounts(cardTypes, total) {
  const base = countCardTypes(cardTypes);
  if (!base.length || total <= 0) return [];

  const weightSum = base.reduce((sum, item) => sum + item.qty, 0);
  const draft = base.map((item) => {
    const exact = (total * item.qty) / weightSum;
    const qty = Math.floor(exact);
    return { code: item.code, qty, frac: exact - qty, weight: item.qty };
  });

  const assigned = draft.reduce((sum, item) => sum + item.qty, 0);
  const remainder = total - assigned;

  draft.sort((a, b) => {
    if (b.frac !== a.frac) return b.frac - a.frac;
    if (b.weight !== a.weight) return b.weight - a.weight;
    return a.code.localeCompare(b.code, "ru");
  });

  for (let i = 0; i < remainder; i += 1) {
    draft[i % draft.length].qty += 1;
  }

  return draft
    .filter((item) => item.qty > 0)
    .sort((a, b) => b.qty - a.qty || a.code.localeCompare(b.code, "ru"))
    .map((item) => ({ code: item.code, qty: item.qty }));
}

function renderCardsList(row) {
  return distributeCardCounts(row.cardTypes, row.needQty)
    .map(
      (item) => `
        <div class="card-count-line">
          <span>${item.code} - ${item.qty} шт.</span>
        </div>
      `
    )
    .join("");
}

function toggleRowExpansion(rowId) {
  if (state.expandedRows.includes(rowId)) {
    state.expandedRows = state.expandedRows.filter((id) => id !== rowId);
  } else {
    state.expandedRows = [...state.expandedRows, rowId];
  }
  renderCurrentState();
}

function makeNextWorkId() {
  workIdCounter += 1;
  return `WK${workIdCounter}`;
}

function transferRowsToInWork(rowIds) {
  const idSet = new Set((rowIds || []).filter(Boolean));
  if (!idSet.size) return { moved: 0 };

  const movedSourceRows = needsRows.filter((row) => idSet.has(row.id));
  if (!movedSourceRows.length) return { moved: 0 };

  const keepRows = needsRows.filter((row) => !idSet.has(row.id));
  needsRows.splice(0, needsRows.length, ...keepRows);

  const movedRows = movedSourceRows.map((source) => ({
    ...source,
    id: makeNextWorkId(),
    banker: source.banker || "—",
    groupLead: source.groupLead || "—",
    stockDays: Math.min(7, Math.max(1, source.daysToDelivery || 7)),
    workStatus: "В работе",
  }));

  inWorkRows = [...movedRows, ...inWorkRows];
  state.expandedRows = state.expandedRows.filter((id) => !idSet.has(id));
  if (state.selectedPinId && idSet.has(state.selectedPinId)) {
    state.selectedPinId = "";
  }

  return { moved: movedRows.length, sourceIds: movedSourceRows.map((row) => row.id) };
}

function transferToInWork(rowId) {
  const result = transferRowsToInWork([rowId]);
  if (!result.moved) return;
  renderFilterControls();
  renderCurrentState();
  toastMessage(`Заявка ${result.sourceIds[0]} передана в исполнение`);
}

function renderEmptyPanel() {
  content.innerHTML = `
    <div class="state-panel">
      <div>
        <div class="empty-icon"></div>
        <h2 class="empty-title">Список пуст</h2>
        <p class="empty-text">Нажмите кнопку «Сформировать список потребностей» выше, чтобы загрузить данные по региону.</p>
      </div>
    </div>
  `;
}

function renderNeedCell(row, expanded) {
  return `
    <div class="cell-content">
      <span>${row.needQty} шт.</span>
      ${
        expanded
          ? `
        <div class="card-counts">
          ${renderCardsList(row)}
        </div>
      `
          : ""
      }
    </div>
  `;
}

function normalizedStockDays(row) {
  const days = Number(row.stockDays);
  const maxDays = row.workStatus ? 7 : 365;
  if (Number.isFinite(days)) return Math.min(maxDays, Math.max(1, Math.round(days)));
  return Math.min(maxDays, Math.max(1, Math.round(row.daysToDelivery || 7)));
}

function renderStockCell(row) {
  const days = normalizedStockDays(row);
  return `
    <div class="stock-cell">
      <span>~${days} дн.</span>
    </div>
  `;
}

function renderNoRowsLine(colspan) {
  return `
    <tr>
      <td colspan="${colspan}">
        <div class="cell-content">Нет заявок</div>
      </td>
    </tr>
  `;
}

function renderBeelineTable(rows) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Город и регион</th>
            <th>Адрес доставки</th>
            <th>Ответственное лицо</th>
            <th>Заявка</th>
            <th>Потребность</th>
            <th>Остатки</th>
            <th>Ожидаемый срок доставки</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          ${
            rows.length
              ? rows
                  .map((row) => {
                    const expanded = state.expandedRows.includes(row.id);
                    return `
                      <tr data-row-id="${row.id}">
                        <td data-toggle-cell="1">
                          <div class="cell-content city-block">
                            <strong>${row.region}</strong>
                            <span>${row.city}</span>
                          </div>
                        </td>
                        <td data-toggle-cell="1">${deliveryAddressCell(row)}</td>
                        <td data-toggle-cell="1">${responsibleCell(row)}</td>
                        <td data-toggle-cell="1"><div class="cell-content"><span class="request-link">${row.id}</span></div></td>
                        <td data-toggle-cell="1">${renderNeedCell(row, expanded)}</td>
                        <td data-toggle-cell="1">${renderStockCell(row)}</td>
                        <td data-toggle-cell="1"><div class="cell-content">${row.daysToDelivery} дн.</div></td>
                        <td>
                          <button type="button" class="transfer-btn" data-transfer-id="${row.id}">Передать в исполнение</button>
                        </td>
                      </tr>
                    `;
                  })
                  .join("")
              : renderNoRowsLine(8)
          }
        </tbody>
      </table>
    </div>
  `;
}

function renderMobileNeedsTable(rows) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Город и регион</th>
            <th>Мобильный банкир</th>
            <th>Начальник группы</th>
            <th>Адрес доставки</th>
            <th>Заявка</th>
            <th>Потребность</th>
            <th>Остатки</th>
            <th>Ожидаемый срок доставки</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          ${
            rows.length
              ? rows
                  .map((row) => {
                    const expanded = state.expandedRows.includes(row.id);
                    return `
                      <tr data-row-id="${row.id}">
                        <td data-toggle-cell="1">
                          <div class="cell-content city-block">
                            <strong>${row.region}</strong>
                            <span>${row.city}</span>
                          </div>
                        </td>
                        <td data-toggle-cell="1"><div class="cell-content">${row.banker || "—"}</div></td>
                        <td data-toggle-cell="1"><div class="cell-content">${row.groupLead || "—"}</div></td>
                        <td data-toggle-cell="1">${deliveryAddressCell(row)}</td>
                        <td data-toggle-cell="1"><div class="cell-content"><span class="request-link">${row.id}</span></div></td>
                        <td data-toggle-cell="1">${renderNeedCell(row, expanded)}</td>
                        <td data-toggle-cell="1">${renderStockCell(row)}</td>
                        <td data-toggle-cell="1"><div class="cell-content">${row.daysToDelivery} дн.</div></td>
                        <td>
                          <button type="button" class="transfer-btn" data-transfer-id="${row.id}">Передать в исполнение</button>
                        </td>
                      </tr>
                    `;
                  })
                  .join("")
              : renderNoRowsLine(9)
          }
        </tbody>
      </table>
    </div>
  `;
}

function handleNeedsTableClick(event) {
  const transferButton = event.target.closest(".transfer-btn");
  if (transferButton) {
    transferToInWork(transferButton.dataset.transferId || "");
    return;
  }

  if (event.target.closest(".request-link")) return;
  const selectedText = window.getSelection ? window.getSelection().toString().trim() : "";
  if (selectedText) return;

  const toggleCell = event.target.closest('td[data-toggle-cell="1"]');
  if (!toggleCell) return;
  if (event.target.closest(".cell-content")) return;

  const row = toggleCell.parentElement.closest("tr[data-row-id]");
  if (!row) return;
  toggleRowExpansion(row.dataset.rowId);
}

function renderTable(rows) {
  const beelineRows = rows.filter((row) => row.supplyBlock === "beeline");
  const mobileRows = rows.filter((row) => row.supplyBlock !== "beeline");

  content.innerHTML = `
    <div class="table-sections">
      <section class="table-section">
        <div class="table-section-head">
          <h3 class="table-section-title">Снабжение ЛЦ Билайн</h3>
        </div>
        ${renderBeelineTable(beelineRows)}
      </section>
      <section class="table-section">
        <div class="table-section-head">
          <h3 class="table-section-title">Снабжение мобильных банкиров</h3>
        </div>
        ${renderMobileNeedsTable(mobileRows)}
      </section>
    </div>
  `;

  content.querySelectorAll(".table-wrap").forEach((tableWrap) => {
    tableWrap.addEventListener("click", handleNeedsTableClick);
  });
}

function renderMap(rows) {
  if (!state.selectedPinId && rows.length) state.selectedPinId = rows[0].id;
  if (!rows.find((item) => item.id === state.selectedPinId)) state.selectedPinId = rows[0] ? rows[0].id : "";

  content.innerHTML = `
    <div class="map-layout">
      <div class="map-canvas">
        ${rows
          .map(
            (row) => `
          <button
            type="button"
            class="map-pin ${state.selectedPinId === row.id ? "selected" : ""}"
            data-pin-id="${row.id}"
            style="left: calc(${row.geo.x}% - 14px); top: calc(${row.geo.y}% - 28px);"
            aria-label="${row.city}, заявка ${row.id}"
            title="${row.city}, ${row.needQty} шт."
          ></button>
        `
          )
          .join("")}
      </div>
      <aside class="map-list">
        ${rows
          .map(
            (row) => `
          <article class="map-item ${state.selectedPinId === row.id ? "active" : ""}" data-pin-id="${row.id}">
            <strong>${row.city} · ${row.id}</strong>
            <span>${row.banker || "ЛЦ Билайн"}</span>
            <span>${operationLabel(row.operationType)} · ${row.needQty} шт. · ${row.daysToDelivery} дн.</span>
          </article>
        `
          )
          .join("")}
      </aside>
    </div>
  `;

  content.querySelectorAll("[data-pin-id]").forEach((node) => {
    node.addEventListener("click", () => {
      state.selectedPinId = node.dataset.pinId || "";
      renderCurrentState();
    });
  });
}

function renderInWorkBeelineTable(rows) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Город и регион</th>
            <th>Адрес доставки</th>
            <th>Ответственное лицо</th>
            <th>Заявка</th>
            <th>Потребность</th>
            <th>Остатки</th>
            <th>Статус</th>
            <th>Ожидаемый срок доставки</th>
          </tr>
        </thead>
        <tbody>
          ${
            rows.length
              ? rows
                  .map((row) => {
                    const expanded = state.expandedRows.includes(row.id);
                    return `
                      <tr data-row-id="${row.id}">
                        <td data-toggle-cell="1">
                          <div class="cell-content city-block">
                            <strong>${row.region}</strong>
                            <span>${row.city}</span>
                          </div>
                        </td>
                        <td data-toggle-cell="1">${deliveryAddressCell(row)}</td>
                        <td data-toggle-cell="1">${responsibleCell(row)}</td>
                        <td data-toggle-cell="1"><div class="cell-content"><span class="request-link">${row.id}</span></div></td>
                        <td data-toggle-cell="1">${renderNeedCell(row, expanded)}</td>
                        <td data-toggle-cell="1">${renderStockCell(row)}</td>
                        <td data-toggle-cell="1">${renderWorkStatusCell(row, expanded)}</td>
                        <td data-toggle-cell="1"><div class="cell-content">${row.daysToDelivery} дн.</div></td>
                      </tr>
                    `;
                  })
                  .join("")
              : renderNoRowsLine(8)
          }
        </tbody>
      </table>
    </div>
  `;
}

function renderInWorkMobileTable(rows) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Город и регион</th>
            <th>Мобильный банкир</th>
            <th>Адрес доставки</th>
            <th>Начальник группы</th>
            <th>Заявка</th>
            <th>Потребность</th>
            <th>Остатки</th>
            <th>Статус</th>
            <th>Ожидаемый срок доставки</th>
          </tr>
        </thead>
        <tbody>
          ${
            rows.length
              ? rows
                  .map((row) => {
                    const expanded = state.expandedRows.includes(row.id);
                    return `
                      <tr data-row-id="${row.id}">
                        <td data-toggle-cell="1">
                          <div class="cell-content city-block">
                            <strong>${row.region}</strong>
                            <span>${row.city}</span>
                          </div>
                        </td>
                        <td data-toggle-cell="1"><div class="cell-content">${row.banker || "—"}</div></td>
                        <td data-toggle-cell="1">${deliveryAddressCell(row)}</td>
                        <td data-toggle-cell="1"><div class="cell-content">${row.groupLead || "—"}</div></td>
                        <td data-toggle-cell="1"><div class="cell-content"><span class="request-link">${row.id}</span></div></td>
                        <td data-toggle-cell="1">${renderNeedCell(row, expanded)}</td>
                        <td data-toggle-cell="1">${renderStockCell(row)}</td>
                        <td data-toggle-cell="1">${renderWorkStatusCell(row, expanded)}</td>
                        <td data-toggle-cell="1"><div class="cell-content">${row.daysToDelivery} дн.</div></td>
                      </tr>
                    `;
                  })
                  .join("")
              : renderNoRowsLine(9)
          }
        </tbody>
      </table>
    </div>
  `;
}

function handleInWorkTableClick(event) {
  const trackNode = event.target.closest("[data-copy-track]");
  if (trackNode) {
    event.preventDefault();
    event.stopPropagation();
    const track = trackNode.getAttribute("data-copy-track") || "";
    copyTrackNumber(track).then((ok) => {
      toastMessage(ok ? `Трек-номер скопирован: ${track}` : "Не удалось скопировать трек-номер");
    });
    return;
  }

  if (event.target.closest(".request-link")) return;
  const selectedText = window.getSelection ? window.getSelection().toString().trim() : "";
  if (selectedText) return;

  const toggleCell = event.target.closest('td[data-toggle-cell="1"]');
  if (!toggleCell) return;
  if (event.target.closest(".cell-content")) return;

  const row = toggleCell.parentElement.closest("tr[data-row-id]");
  if (!row) return;
  toggleRowExpansion(row.dataset.rowId);
}

function renderInWork(rows) {
  const beelineRows = rows.filter((row) => row.supplyBlock === "beeline");
  const mobileRows = rows.filter((row) => row.supplyBlock !== "beeline");

  content.innerHTML = `
    <div class="table-sections">
      <section class="table-section">
        <h3 class="table-section-title">Снабжение ЛЦ Билайн</h3>
        ${renderInWorkBeelineTable(beelineRows)}
      </section>
      <section class="table-section">
        <h3 class="table-section-title">Снабжение мобильных банкиров</h3>
        ${renderInWorkMobileTable(mobileRows)}
      </section>
    </div>
  `;

  content.querySelectorAll(".table-wrap").forEach((tableWrap) => {
    tableWrap.addEventListener("click", handleInWorkTableClick);
  });
}

function renderCurrentState() {
  tabButtons.forEach((button) => button.classList.toggle("active", button.dataset.tab === state.tab));
  const rows = state.tab === "inwork" ? filteredInWorkRows() : filteredRows();

  if (state.tab === "table") {
    renderTable(rows);
    return;
  }

  if (!rows.length) {
    renderEmptyPanel();
    return;
  }

  if (state.tab === "map") {
    renderMap(rows);
  } else {
    renderInWork(rows);
  }
}

function bindEvents() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterId = button.dataset.filterTrigger || "";
      if (!filterId || !isFilterEnabled(filterId)) return;
      state.openFilter = state.openFilter === filterId ? "" : filterId;
      renderFilterControls();
      if (state.openFilter === "city") {
        const citySearchInput = document.querySelector('[data-filter-dropdown="city"] [data-city-search]');
        if (citySearchInput) {
          const pos = citySearchInput.value.length;
          citySearchInput.focus();
          citySearchInput.setSelectionRange(pos, pos);
        }
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-filter]")) return;
    if (!state.openFilter) return;
    state.openFilter = "";
    renderFilterControls();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (!state.openFilter) return;
    state.openFilter = "";
    renderFilterControls();
  });

  generateBtn.addEventListener("click", () => {
    if (!hasRequiredPrimaryFilters()) return;
    state.appliedFilters = cloneFilters(state.filters);
    state.generated = true;
    state.selectedPinId = "";
    state.expandedRows = [];
    renderCurrentState();
    const rowsCount = filteredRows().length;
    toastMessage(rowsCount ? `Список потребностей сформирован: ${rowsCount} записей` : "Данные по фильтру не найдены");
  });

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.tab = button.dataset.tab || "table";
      renderCurrentState();
    });
  });
}

renderFilterControls();
bindEvents();
renderCurrentState();
