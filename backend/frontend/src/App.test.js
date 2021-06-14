
import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';
import SearchFunc from './Components/SearchFunc';


//Snapshot test
//This test is used to establish if the app file with all its components renders correctly and that the UI does not change unexpectedly. 

describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

//Unit test
//I wanted to test the method function used in SearchFunc. I struggled to understand this part of the project. 

global.fetch = jest.fn(()=>Promise.resolve({
  json:()=>Promise.resolve({
    searchResult : [info]
  })
}))

describe("SearchFunc",()=>{
  it("populates array when called",()=>{
    act(() => render(<SearchFunc/>))
    return fetchData().then(info=>{
      expect(array.info).toBe(info)
    })
  })
})
// test('the data is itunes results', () => {
//   return fetchData().then(data => {
//     expect(data).toBe('itunes results');
//   });
// });


