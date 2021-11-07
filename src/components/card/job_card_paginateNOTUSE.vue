<template>
   <div id="app">
    <table class="table t3">
      <thead class="thead">
        <tr class="tr">
          <th class="td no" width="10%">
            <span class="has-text-orange">No</span>
          </th>
          <th class="td">
            <span class="has-text-orange">Name</span>
          </th>
        </tr>
      </thead>
      <tbody
        class="searchable tbody"
        style="max-height: 200px; min-height: 200px"
      >
        <tr class="tr" v-for="(p, index) in paginated" :key="index">
          <td class="td no" width="10%">{{ indexStart + ++index }}</td>
          <td class="td">{{ p.letter }}</td>
        </tr>
      </tbody>
    </table>
    <div class="column is-12">
      <nav
        class="pagination is-right"
        role="navigation"
        aria-label="pagination"
      >
        <ul class="pagination-list">
          <li>
            <a @click="prev"> Prev </a>
          </li>
          <li>
            <span
              class="pagination-link go-to has-text-orange"
              aria-label="Goto page 1"
              >{{ current }}</span
            >
          </li>
          <li>
            <a @click="next()"> Next </a>
          </li>
          <li>
            <a @click="clear()"> clear </a>
          </li>

          <li>
            <input type="text" class="pagination-link" />
          </li>
          <li>
            <button class="button">Go</button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style>
    .table-pagination {
        margin-top: 20px;
        text-align: right;
    }
</style>

<script>

import JobApi from "@/store/JobApi.js"
import UserApi from "@/store/AuthUser.js"
import Axios from "axios";
import CategoryStore from "@/store/CategoryStore";

    // Simulation table data from database
    let DB_DATA = [];

    export default {
                data() {
            return {
            current: 1,
            pageSize: 10,
            alphabets: [[
                { letter: "a" },
                { letter: "b" },
                { letter: "c" },
                { letter: "d" },
                { letter: "e" },
                { letter: "f" },
                { letter: "g" },
                { letter: "h" },
                { letter: "i" },
                { letter: "j" },
                { letter: "k" },
                { letter: "l" },
                { letter: "m" },
                { letter: "n" },
                { letter: "o" },
                { letter: "p" },
                { letter: "q" },
                { letter: "r" },
                { letter: "s" },
                { letter: "t" },
                { letter: "u" },
                { letter: "v" },
                { letter: "w" },
                { letter: "x" },
                { letter: "y" },
                { letter: "z" },
            ]],
            };
        },
        computed: {
            indexStart() {
            return (this.current - 1) * this.pageSize;
            },
            indexEnd() {
            return this.indexStart + this.pageSize;
            },
            paginated() {
            return this.alphabets[0].slice(this.indexStart, this.indexEnd);
            }
        },
        methods: {
            prev() {
            this.current--;
            },
            next() {
            this.current++;
            },
            clear() {
            this.current = 1;
            }
        }
    };
</script>