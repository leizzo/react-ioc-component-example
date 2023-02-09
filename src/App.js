import Input from "./components/input";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Input.Group>
        {({ setInputValue, value, onSend }) => {
          return (
            <>
              <Input.Text
                value={value}
                onFocus={setInputValue}
                icon={() => <span>LE1ZZO</span>}
              />
              <Input.Button onClick={onSend}> Send </Input.Button>
            </>
          );
        }}
      </Input.Group>
    </div>
  );
};

export default App;
