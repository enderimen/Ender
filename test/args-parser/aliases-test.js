/*!
 * ENDER - The open module JavaScript framework
 *
 * Copyright (c) 2011-2012 @ded, @fat, @rvagg and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished
 * to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


var buster     = require('bustermove')
  , assert     = require('referee').assert
  , refute     = require('referee').refute
  , argsParser = require('../../lib/args-parser')

buster.testCase('aliases', {
    'test set = add': function () {
      var actual = argsParser.parse(['node', '/some/path/to/bin', 'set'])
      assert.equals(actual.command, 'add')
    }

  , 'test rm = remove': function () {
      var actual = argsParser.parse(['node', '/some/path/to/bin', 'rm'])
      assert.equals(actual.command, 'remove')
    }

  , 'test ls = info': function () {
      var actual = argsParser.parse(['node', '/some/path/to/bin', 'ls'])
      assert.equals(actual.command, 'info')
    }

  , 'test list = info': function () {
      var actual = argsParser.parse(['node', '/some/path/to/bin', 'list'])
      assert.equals(actual.command, 'info')
    }
})