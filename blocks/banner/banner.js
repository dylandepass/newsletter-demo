/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

export default function decorate(block) {
  const textContent = block.textContent;
  const table = /*html*/`
    <table width="100%" style="margin-top:20px;margin-bottom:20px"> 
      <tbody>
        <tr> 
          <td align="left" style="background-color:#eb1000;padding: 5px;"><p style="font-size:20px;color:#ffffff;line-height:30px;"><strong>${textContent}</strong></p></td> 
        </tr> 
      </tbody>
    </table>
  `;
  block.innerHTML = table;
}