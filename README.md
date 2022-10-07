# Select 버튼 개별 작동

### map함수로 중복되는 버튼 만들기

```
<div className={"button__list" + (characterExpanded ? " show" : " hide")}>
  {characterList.map((item, idx) => (
    <label
      className={[
        "button__item",
        activeCopy[item.id] ? "active" : null,
      ].join(" ")}
      htmlFor={item.name}
      key={item.id}
    >
      <input
        type="checkbox"
        id={item.name}
        className="button__input"
        value={item.name}
        name="item-name"
      />
      <span className="button__name">{item.name}</span>
    </label>
  ))}
</div>
```

-

### 버튼의 체크여부 확인하기

```
const [characterActive, setCharacterActive] = useState(
    Array(characterList.length).fill(false)
);
```

- 버튼의 개수만큼 배열에 체크상태를 담아준다
- 기본 체크상태가 담긴 배열을 state에 보관해준다
- 버튼의 기본 상태는 클릭이 되지 않은 상태이므로 false

---

```
const [checkedCharacterList, setCheckedCharacterList] = useState([]);
let characterActiveCopy = [...characterActive];
const onCheckedHandler = (checked, item, idx) => {
  if (checked) {
    setCheckedList([...checkedList, item]);
    activeCopy[id] = checked;
    setIsActive(activeCopy);
  }
};
```

- 배열을 복사한 activeCopy는 className을 변경할 때 사용되어야하기 때문에, 전역적으로 사용한다
- e.target.checked가 true면 체크된 버튼을 모아놓는 배열에 추가해준다
- 클릭된 버튼의 id를 e.target.checked와 같은 상태로 바꿔준 후 상태변경함수로 state를 변경해준다

```
<input
  type="checkbox"
  id={item.name}
  className="button__input"
  value={item.name}
  name="item-name"
  onChange={e => {
    onCheckedHandler(
      e.target.checked,
      e.target.value,
      idx
    );
  }}
/>
```

- input태그 onChange의 onCheckedHandler함수에 클릭된 버튼의 체크여부와, value값, idx를 담아 호출한다
- 실수했던 점
  - id는 고유해서 겹치면 안되는데 map함수로 만들었으니 괜찮을거라고 생각해서 area버튼을 클릭하면 character버튼이 동작하는 문제가 발생했다
  - id가 겹치지 않도록 item.id 에서 item.name으로 변경해주었다

```
let characterActiveCopy = [...characterActive];
<label
  className={[
    "button__item",
    characterActiveCopy[item.id] ? "active" : null,
  ].join(" ")}
  htmlFor={item.name}
  key={item.id}
>
```

- 클릭된 버튼의 체크여부에 따라 className에 active를 추가/제거 해주었다
