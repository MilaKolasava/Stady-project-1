import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { useCityWeather } from "../useCityWeather.hook"

describe ("useCityWeather.hook", () => {
test("should return city", () => {
    const { result } = renderHook(() => useCityWeather());

    expect(result.current.city).toBeUndefined();
});

test("should render isEmpty", () => {
    const { result } = renderHook(() => useCityWeather());

    expect(result.current.isEmpty).toBeTruthy();
});

test("should render isLoading", () => {
    const { result } = renderHook(() => useCityWeather());

    // eslint-disable-next-line jest/valid-expect
    expect(result.current.isLoading).toBeFalsy();
});

test("should be called setCity", async () => {
    const { result } = renderHook(() => useCityWeather());

    act(() => {
        result.current.setCity("city");
    });

    result.current.handleClick();

    expect(result.current.city).toBe("city");
});
})