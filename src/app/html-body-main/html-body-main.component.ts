import { Component } from "@angular/core";

@Component({
  selector: "app-html-body-main",
  templateUrl: "./html-body-main.component.html",
  styleUrls: ["./html-body-main.component.css"]
})

export class HtmlBodyMainComponent {

  sub_cubes_coloring_func(): void {

    let sub_c_00: any = document.querySelectorAll(String(".SubC00"));
    let sub_c_01: any = document.querySelectorAll(String(".SubC01"));
    let sub_c_02: any = document.querySelectorAll(String(".SubC02"));
    let sub_c_10: any = document.querySelectorAll(String(".SubC10"));
    let sub_c_11: any = document.querySelectorAll(String(".SubC11"));
    let sub_c_12: any = document.querySelectorAll(String(".SubC12"));
    let sub_c_20: any = document.querySelectorAll(String(".SubC20"));
    let sub_c_21: any = document.querySelectorAll(String(".SubC21"));
    let sub_c_22: any = document.querySelectorAll(String(".SubC22"));

    [...sub_c_00, ...sub_c_11, ...sub_c_22].forEach((cubicle) => {
      cubicle.style.borderColor = String("rgb(244, 122, 122)");
    });
    [...sub_c_01, ...sub_c_12, ...sub_c_20].forEach((cubicle) => {
      cubicle.style.borderColor = String("rgb(122, 244, 122)");
    });
    [...sub_c_02, ...sub_c_10, ...sub_c_21].forEach((cubicle) => {
      cubicle.style.borderColor = String(" rgb(122, 122, 244)");
    });

  }


  cols_coloring_func(): void {

    let c_0: any = document.querySelectorAll(String(".X0"));
    let c_1: any = document.querySelectorAll(String(".X1"));
    let c_2: any = document.querySelectorAll(String(".X2"));
    let c_3: any = document.querySelectorAll(String(".X3"));
    let c_4: any = document.querySelectorAll(String(".X4"));
    let c_5: any = document.querySelectorAll(String(".X5"));
    let c_6: any = document.querySelectorAll(String(".X6"));
    let c_7: any = document.querySelectorAll(String(".X7"));
    let c_8: any = document.querySelectorAll(String(".X8"));

    [...c_0, ...c_3, ...c_6].forEach((cubicle) => {
      cubicle.style.borderColor = String("rgb(244, 122, 122)");
    });
    [...c_1, ...c_4, ...c_7].forEach((cubicle) => {
      cubicle.style.borderColor = String("rgb(122, 244, 122)");
    });
    [...c_2, ...c_5, ...c_8].forEach((cubicle) => {
      cubicle.style.borderColor = String(" rgb(122, 122, 244)");
    });

  }


  rows_coloring_func(): void {

    let y_0: any = document.querySelectorAll(String(".Y0"));
    let y_1: any = document.querySelectorAll(String(".Y1"));
    let y_2: any = document.querySelectorAll(String(".Y2"));
    let y_3: any = document.querySelectorAll(String(".Y3"));
    let y_4: any = document.querySelectorAll(String(".Y4"));
    let y_5: any = document.querySelectorAll(String(".Y5"));
    let y_6: any = document.querySelectorAll(String(".Y6"));
    let y_7: any = document.querySelectorAll(String(".Y7"));
    let y_8: any = document.querySelectorAll(String(".Y8"));

    [...y_0, ...y_3, ...y_6].forEach((cubicle) => {
      cubicle.style.borderColor = String("rgb(244, 122, 122)");
    });
    [...y_1, ...y_4, ...y_7].forEach((cubicle) => {
      cubicle.style.borderColor = String("rgb(122, 244, 122)");
    });
    [...y_2, ...y_5, ...y_8].forEach((cubicle) => {
      cubicle.style.borderColor = String(" rgb(122, 122, 244)");
    });

  }


  null_coloring_func(): void {

    let cubicles: any = document.querySelectorAll(String("td"));

    [...cubicles].forEach((cubicle) => {
      cubicle.style.borderColor = String("rgb(0, 0, 0)");
    });

  }


  gen_unsolved_func(): void {

    let generate_unsolved_bttn: any = document.querySelector(String("#generate-unsolved-bttn"));
    let solve_bttn: any = document.querySelector(String("#solve-bttn"));
    let start_nums: number[] = [];
    let cubicles: any = document.querySelectorAll(String("td"));
    let cubicle9: any = cubicles[Number(9)];
    let cubicle10: any = cubicles[Number(10)];
    let cubicle11: any = cubicles[Number(11)];
    let cubicle12: any = cubicles[Number(12)];
    let cubicle13: any = cubicles[Number(13)];
    let cubicle14: any = cubicles[Number(14)];
    let cubicle15: any = cubicles[Number(15)];
    let cubicle16: any = cubicles[Number(16)];
    let cubicle17: any = cubicles[Number(17)];
    let cubicle18: any = cubicles[Number(18)];
    let cubicle19: any = cubicles[Number(19)];
    let cubicle20: any = cubicles[Number(20)];
    let cubicle21: any = cubicles[Number(21)];
    let cubicle22: any = cubicles[Number(22)];
    let cubicle23: any = cubicles[Number(23)];
    let cubicle24: any = cubicles[Number(24)];
    let cubicle25: any = cubicles[Number(25)];
    let cubicle26: any = cubicles[Number(26)];
    let ___class___: string = <string>'';
    let class_subc: string = <string>'';
    let class_row: string = <string>'';
    let class_col: string = <string>'';
    let flag_if_bugly_error_generation: boolean = <boolean>false;
    let UI_erase_indexes: number[] = [];

    [...cubicles].forEach((_td_cube_) => {
      _td_cube_.innerHTML = String('0');
      _td_cube_.style.color = String("rgb(122, 122, 122)");
    });
    generate_unsolved_bttn.style.visibility = String("hidden");
    solve_bttn.style.visibility = String("visible");
    while (Number(start_nums.length) < Number(9)) {
      let prob_new_int_val: number = Number(
        <number>Math.floor(<number>Math.random() * <number>9) + <number>1
      );
      if (
        Boolean(start_nums.includes(prob_new_int_val)) === <boolean>false
      ) {
        start_nums.push(prob_new_int_val);
      };
    };
    for (let i: number = <number>0; i < <number>9; i++) {
      let cubicle: any = cubicles[i];
      cubicle.innerHTML = String(start_nums[i]);
      cubicle.style.color = String("rgb(0, 0, 0)");
    };
    cubicle9.innerHTML = String(Number(start_nums[Number(6)]));
    cubicle10.innerHTML = String(Number(start_nums[Number(7)]));
    cubicle11.innerHTML = String(Number(start_nums[Number(8)]));
    cubicle12.innerHTML = String(Number(start_nums[Number(0)]));
    cubicle13.innerHTML = String(Number(start_nums[Number(1)]));
    cubicle14.innerHTML = String(Number(start_nums[Number(2)]));
    cubicle15.innerHTML = String(Number(start_nums[Number(3)]));
    cubicle16.innerHTML = String(Number(start_nums[Number(4)]));
    cubicle17.innerHTML = String(Number(start_nums[Number(5)]));
    cubicle18.innerHTML = String(Number(start_nums[Number(3)]));
    cubicle19.innerHTML = String(Number(start_nums[Number(4)]));
    cubicle20.innerHTML = String(Number(start_nums[Number(5)]));
    cubicle21.innerHTML = String(Number(start_nums[Number(6)]));
    cubicle22.innerHTML = String(Number(start_nums[Number(7)]));
    cubicle23.innerHTML = String(Number(start_nums[Number(8)]));
    cubicle24.innerHTML = String(Number(start_nums[Number(0)]));
    cubicle25.innerHTML = String(Number(start_nums[Number(1)]));
    cubicle26.innerHTML = String(Number(start_nums[Number(2)]));
    [
      cubicle9, cubicle10, cubicle11, cubicle12, cubicle13, cubicle14, cubicle15,
      cubicle16, cubicle17, cubicle18, cubicle19, cubicle20, cubicle21, cubicle22,
      cubicle23, cubicle24, cubicle25, cubicle26
    ]
      .forEach((cubicle) => {
        cubicle.style.color = String("rgb(0, 0, 0)");
      });
    for (let repeater: number = <number>0; repeater < <number>26; repeater++) {
      for (let yindx: number = <number>27; yindx <= <number>80; yindx++) {
        ___class___ = String(cubicles[yindx].getAttribute(String("class")));
        class_subc = String(___class___).split(' ')[0];
        class_row = String(___class___).split(' ')[1];
        class_col = String(___class___).split(' ')[2];
        let subc_tds: any = document.querySelectorAll(String('.') + String(class_subc));
        let row__tds: any = document.querySelectorAll(String('.') + String(class_row));
        let col__tds: any = document.querySelectorAll(String('.') + String(class_col));
        let subc_vals: any[] | number[] | string[] = [];
        let row__vals: any[] | number[] | string[] = [];
        let col__vals: any[] | number[] | string[] = [];
        for (let index_iterator: number = <number>0; index_iterator < <number>9; index_iterator++) {
          subc_vals.push(Number(String(subc_tds[index_iterator].innerHTML)));
          row__vals.push(Number(String(row__tds[index_iterator].innerHTML)));
          col__vals.push(Number(String(col__tds[index_iterator].innerHTML)));
        };
        for (let pos_new_val: number = <number>1; pos_new_val <= <number>9; pos_new_val++) {
          if (
            (Boolean(subc_vals.includes(pos_new_val)) === <boolean>false)
            &&
            (Boolean(row__vals.includes(pos_new_val)) === <boolean>false)
            &&
            (Boolean(col__vals.includes(pos_new_val)) === <boolean>false)
          ) {
            let ___td: any = cubicles[yindx];
            ___td.innerHTML = String(Number(pos_new_val));
            ___td.style.color = String("rgb(0, 0, 0)");
          };
        };
      };
    };
    [...cubicles].forEach((cubicle) => {
      if (String(cubicle.innerHTML) === String('0')) {
        flag_if_bugly_error_generation = <boolean>true;
      };
    });
    if (
      Boolean(flag_if_bugly_error_generation) === Boolean(true)
    ) {
      [...cubicles].forEach((cubicle) => {
        cubicle.innerHTML = String('0');
        cubicle.style.color = String("rgb(122, 122, 122)");
      });
      this.gen_unsolved_func();
    }
    else {
      while (
        Number(UI_erase_indexes.length) < <number>13
      ) {
        let prob_new_indx_val: number = Number(Math.floor(Math.random() * <number>81));
        if (
          Boolean(UI_erase_indexes.includes(prob_new_indx_val)) === <boolean>false
        ) {
          UI_erase_indexes.push(prob_new_indx_val);
        };
      };
      for (let item in UI_erase_indexes) {
        cubicles[UI_erase_indexes[item]].style.color = String("rgb(122, 122, 122)");
      };
    };

  }


  solve_func(): void {

    let generate_unsolved_bttn: any = document.querySelector(String("#generate-unsolved-bttn"));
    let solve_bttn: any = document.querySelector(String("#solve-bttn"));
    let ___cubicles: any = document.querySelectorAll(String("td"));

    generate_unsolved_bttn.style.visibility = String("visible");
    solve_bttn.style.visibility = String("hidden");
    [...___cubicles].forEach((td_cubicle) => {
      td_cubicle.style.color = String("rgb(0, 0, 0)");
    });

  }


}