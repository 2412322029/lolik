### 添加公式的方法

1、行内公式

```
$行内公式$
```

2、行间公式

```
 $$行间公式$$
```

### 一些常用特殊符号

表1:

| ==关系运算符代码== | 符号效果 | ==集合运算符代码== | 符号效果 | ==三角运算符代码== | 符号效果     |
| :----------------- | :------- | :----------------- | :------- | :----------------- | :----------- |
| \pm                | ±        | \emptyset          | ∅        | \bot               | ⊥            |
| \times             | ×        | \in                | ∈        | \angle             | ∠            |
| \div               | ÷        | \notin             | ∉        | 30^\circ           | 30∘          |
| \mid               | ∣        | \subset            | ⊂        | \sin               | sin          |
| \nmid              | ∤        | \supset            | ⊃        | \cos               | cos          |
| \cdot              | ⋅        | \subseteq          | ⊆        | \tan               | tan          |
| \circ              | ∘        | \supseteq          | ⊇        | \cot               | cot          |
| \ast               | ∗        | \bigcap            | ⋂        | \sec               | sec          |
| \bigodot           | ⨀        | \bigcup            | ⋃        | \csc               | csc          |
| \bigotimes         | ⨂        | \bigvee            | ⋁        | **戴帽符号**       | **符号效果** |
| \leq               | ≤        | \bigwedge          | ⋀        | \hat{y}            | y^           |
| \geq               | ≥        | \biguplus          | ⨄        | \check{y}          | yˇ           |
| \neq               | ≠        | \bigsqcup          | ⨆        | \breve{y}          | y˘           |
| \approx            | ≈        |                    |          |                    |              |
| \equiv             | ≡        |                    |          |                    |              |
| \sum               | ∑        |                    |          |                    |              |
| \prod              | ∏        |                    |          |                    |              |
| \coprod            | ∐        |                    |          |                    |              |

表2

| ==箭头符号==    | 符号效果 | ==微积分运算符== | 符号效果 | ==逻辑运算符== | 符号效果 |
| :-------------- | :------- | :--------------- | :------- | :------------- | :------- |
| \uparrow        | ↑        | \prime           | ′        | \because       | ∵        |
| \downarrow      | ↓        | \int             | ∫        | \therefore     | ∴        |
| \Uparrow        | ⇑        | \iint            | ∬        | \forall        | ∀        |
| \Downarrow      | ⇓        | \iiint           | ∭        | \exists        | ∃        |
| \rightarrow     | →        | \iiiint          | ⨌        | \not=          | ≠        |
| \leftarrow      | ←        | \oint            | ∮        | \not>          | ≯        |
| \Rightarrow     | ⇒        | \lim             | lim      | \not\subset    | ⊄        |
| \Leftarrow      | ⇐        | \infty           | ∞        |                |          |
| \longrightarrow | ⟶        | \nabla           | ∇        |                |          |
| \longleftarrow  | ⟵        |                  |          |                |          |
| \Longrightarrow | ⟹        |                  |          |                |          |
| \Longleftarrow  | ⟸        |                  |          |                |          |

表三：

| ==对数运算符== | 符号效果 | ==连线符号==                                 | 符号效果        |
| :------------- | :------- | :------------------------------------------- | :-------------- |
| \log           | log      | \overline{a+b+c+d}                           | a+b+c+d¯        |
| \lg            | lg       | \underline{a+b+c+d}                          | a+b+c+d_        |
| \ln            | ln       | \overbrace{a+\underbrace{b+c}_{1.0}+d}^{2.0} | a+b+c⏟1.0+d⏞2.0 |

希腊字母



### Latex 数学公式语法

### 1、角标（上下标）

- 上标命令^{}
- 下标命令_{}

上下标命令用来放在需要插入上下标的地方，华括弧内为上下标的内容，当角标为单个字符时候，可以不使用花括号；如果角标为多字符或者多层次的时候，必须要使用花括号。

**举例：**

```markdown
$$x^2, x_1^2, x^{(n)}_{22}, ^{16}O^{2-}_{32}, x^{y^{z^a}}, x^{y_z}$$
```

$$x^2, x_1^2, x^{(n)}_{22}, ^{16}O^{2-}_{32}, x^{y^{z^a}}, x^{y_z}$$



如果需要使用文字作为角标，首先要把文字放在\mbox{}文字模式中，另外要加上改变文字大小的命令，例如：

```markdown
$\partial f_{\mbox{\tiny 极大值}}$
```

$\partial f_{\mbox{\tiny 极大值}}$

显示为：极大值∂f\tiny 极大值
当角标位置看起来不明显时，可以强制改变角标大小或层次，距离如下：

```
 $$y_N,   y_{_N},    y_{_{\scriptstyle N}}$$
```

显示为：

$$y_N,   y_{_N},    y_{_{\scriptstyle N}}$$

第一种输出为正常输出，但输出效果不明显；第二种是将一级角标改为二级角标，字体也自动变为二级角标字体；第三种将一级角标改为二级角标，但是强制字体改为一级角标字体。

### 2、分式

- **分式命令**：\frac{分子}{分母}

举例：

**行内分式**`$\frac{x+y}{y+z}$`，显示为

$\frac{x+y}{y+z}$

行间分式：`$$\frac{x+y}{y+z}$$`显示为:

$$\frac{x+y}{y+z}$$

上面的例子表明行内分式字体比行间字体小，因为行内分式使用的是角标字体，可以人工改变行内分式的字体大小，例如：`$\displaystyle\frac{x+y}{y+z}$` 显示为

$\displaystyle\frac{x+y}{y+z}$

连分式：`$x_0+\frac{1}{x_1+\frac{1}{x_2+\frac{1}{x_3+\frac{1}{x_4}}}}$`，显示为

$x_0+\frac{1}{x_1+\frac{1}{x_2+\frac{1}{x_3+\frac{1}{x_4}}}}$

可以通过强制改变字体大小使得分子分母字体大小一致，例如：
`$\newcommand{\FS}[2]{\displaystyle\frac{#1}{#2}}x0+\FS{1}{X_1+\FS{1}{X_2+\FS{1}{X_3+\FS{1}{X_4}}}}$`显示为:
$\newcommand{\FS}[2]{\displaystyle\frac{#1}{#2}}x0+\FS{1}{X_1+\FS{1}{X_2+\FS{1}{X_3+\FS{1}{X_4}}}}$

其中第一行命令定义了一个新的分式命令，规定每个调用该命令的分式都按\displaystyle的格式显示分式；分数线长度值是预设为分子分母的最大长度，如果想要使分数线再长一点，可以在分子或分母两端添加一些间隔，例如12,12，显示为12,1212,12，其中第一个显示是正常的显示，第二个显示是分子分母前后都放入一个间隔命令\;

### 3、根式

- 二次根式命令：\sqrt{表达式}

  $\sqrt{表达式}$

- 如果表达式是个单个字符，则不需要花括号，但需要在字符和sqrt之间加入一个空格。

- n次根式命令：\sqrt[n]{表达式}

  $\sqrt[n]{表达式}$

被开方表达式字符高度不一致时，根号上面的横线可能不是在同一条直线上；为了使横线在同一条直线上，可以在被开方表达式插入一个只有高度没有宽度的数学支柱\mathstut。

例如： `$\sqrt{a}+\sqrt{b}+\sqrt{c},\qquad \sqrt{\mathstrut a}+\sqrt{\mathstrut b}+\sqrt{\mathstrut c}$` 显示为:

$\sqrt{a}+\sqrt{b}+\sqrt{c},\qquad \sqrt{\mathstrut a}+\sqrt{\mathstrut b}+\sqrt{\mathstrut c}$

当被开方表达式高时，开方次数的位置显得略低，解决方法为：将开方此时改为上标，并拉近与根式的水平距离，即显示将命令中的[n]改为[^n\!],其中^表示是上标，\!表示缩小间隔，例如：`$\sqrt{1+\sqrt[p]{1+\sqrt[q]{1+a}}}$`显示为:1+1+1+aqp。`$\sqrt{1+\sqrt[^p\!]{1+\sqrt[^q\!]{1+a}}}$`显示为

$\sqrt{1+\sqrt[^p\!]{1+\sqrt[^q\!]{1+a}}}$

（注意比较两个根式开方次数的显示位置）

### 4、求和与积分

- 求和命令：\sum_{k=1}^n表达式          _

  $\sum_{k=1}^n$  （求和项紧随其后,下同）

- 积分命令：\int_a^b表达式 $\int_a^b$

例如：无穷级数`$\sum_{k=1}^\infty\frac{x^n}{n!}$`显示为：

$\sum_{k=1}^\infty\frac{x^n}{n!}$ 。

可以化为积分`$\int_0^\infty e^x$`显示为

$\int_0^\infty e^x$。也即是：∑k=1∞xnn!=∫0∞ex。

- 改变上下限位置的命令：\limits(强制上下限在上下侧) 和 \nolimits(强制上下限在左右侧)

例如： `$\sum\limits_{k=1}^n$` 和 `$\sum\nolimits_{k=1}^n$`显示结果为：$\sum\limits_{k=1}^n$和 $\sum\nolimits_{k=1}^n$

### 5、下划线、上划线等

- 上划线命令： \overline{公式}
- 下划线命令：\underline{公式}

例如：`$\overline{\overline{a^2}+\underline{ab}+\bar{a}^3}$`显示为

$\overline{\overline{a^2}+\underline{ab}+\bar{a}^3}$

- 上花括弧命令：\overbrace{公式}{说明}
- 下花括弧命令：\underbrace{公式}_{说明}

例如：`$\underbrace{a+\overbrace{b+\dots+b}^{m\mbox{\tiny 个}}}_{20\mbox{\scriptsize 个}}$`显示为：$\underbrace{a+\overbrace{b+\dots+b}^{m\mbox{\tiny 个}}}_{20\mbox{\scriptsize 个}}$

### 6、数学重音符号

以a为例，；如果字母i或j带有重音，字母i,y应该替换为\imath、\jmath

| \hat{a}   | $\hat{a}$   | \vec{a}      | $\vec{a}$      |
| :-------- | :---------- | ------------ | -------------- |
| \check{a} | $\check{a}$ | \acute{a}    | $\acute{a}$    |
| \breve{a} | $\breve{a}$ | \grave{a}    | $\grave{a}$    |
| \tilde{a} | $\tilde{a}$ | \mathring{a} | $\mathring{a}$ |
| \bar{a}   | $\bar{a}$   | \dot{a}      | $\ddot{a}$     |

### 7. 数学样式

> 文字样式

`\mathcal{A}`
$\mathcal{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$

`\mathbb{A}`
$\mathbb{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$

`\mathfrak{A}`
$\mathfrak{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$

`\mathsf{A}`
$\mathsf{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$

`\mathscr{A}`
$\mathscr{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$

`\mathrm{A}`
$\mathrm{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$

`\mathit{A}`
$\mathit{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$

`\mathnormal{A}`
$\mathnormal{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$

`\mathbf{A}`
$\mathbf{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$

`\textbf{A}` 文本样式粗体
$\textbf{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$

`\text{A}` 文本样式
$\text{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$

`\boldsymbol{A}`
$\boldsymbol{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$

> 大小颜色

| ${\color{red}123} {\color{blue}456} {\color{green}789}$ | `{\color{red}123} {\color{blue}456} {\color{green}789}` |
| ------------------------------------------------------- | ------------------------------------------------------- |
| $\tiny{abc}$                                            | `\tiny{abc}`                                            |
| $\scriptsize{abc}$                                      | `\scriptsize{abc}`                                      |
| $\small{abc}$                                           | `\small{abc}`                                           |
| $\normalsize{abc}$                                      | `\normalsize{abc}`                                      |
| $\large{abc}$                                           | `\large{abc}`                                           |
| $\Large{abc}$                                           | `\Large{abc}`                                           |
| $\LARGE{abc}$                                           | `\LARGE{abc}`                                           |
| $\huge{abc}$                                            | `\huge{abc}`                                            |
| $\Huge{abc}$                                            | `\Huge{abc}`                                            |

### 8、堆积符号

- \stacrel{上位符号}{基位符号} 基位符号大，上位符号小
- {上位公式\atop 下位公式} 上下符号一样大
- {上位公式\choose 下位公式} 上下符号一样大；上下符号被包括在圆弧内

例如： `$\vec{x}\stackrel{\mathrm{def}}{=}{x_1,\dots,x_n}\\ {n+1 \choose k}={n \choose k}+{n \choose k-1}\\ \sum_{k_0,k_1,\ldots>0 \atop k_0+k_1+\cdots=n}A_{k_0}A_{k_1}\cdots$` 显示效果为：

$\vec{x}\stackrel{\mathrm{def}}{=}{x_1,\dots,x_n}\\ {n+1 \choose k}={n \choose k}+{n \choose k-1}\\ \sum_{k_0,k_1,\ldots>0 \atop k_0+k_1+\cdots=n}A_{k_0}A_{k_1}\cdots$

### 9、定界符

```
$$
（）\big(\big) \Big(\Big) \bigg(\bigg) \Bigg(\Bigg)
\big(\Big) \bigg(\Bigg)
$$
```

显示结果为：

$$
（）\big(\big) \Big(\Big) \bigg(\bigg) \Bigg(\Bigg)
\big(\Big) \bigg(\Bigg)
$$

自适应放大命令：\left 和\right，本命令放在左右定界符前，自动随着公式内容大小调整符号大小。例子：
$\left(\overline{\overline{a^2}+\underline{ab}+\bar{a}^3}\right)$

### 10、占位宽度

- 两个quad空格 `a \qquad b` 两个 m 的宽度, 显示为：$a \qquad b$
- quad空格 `a \quad b` 一个 m 的宽度，显示为：$a \quad b$
- 大空格 `a\ b` 1/3m 宽度，显示为：$a\ b$
- 中等空格 `a\;b` 2/7m宽度，显示为：$a\;b$
- 小空格 `a\,b` 1/6m宽度, 显示为：$a\,b$
- 没有空格 `ab`, 显示为：$ab$
- 紧贴 `a\!b` 缩进1/6m宽度, 显示为：$a\!b$
- `\quad` 代表当前字体下接近字符‘M’的宽度（approximately the width of an "M" in the current font）

### 11、集合相关的运算命令

- 集合的大括号：`\{ ...\}` ，显示为：$\{ ...\}$
- 集合中的`|：` , 显示为： $|：$
- 属于：`\in` 显示为：$ ∈$
- 不属于： `\not\in` 显示为：$ ∉$
- A包含于B： `A\subset B` 显示为：$ A\subset B$
- A真包含于B：`A \subsetneqq B` 显示为：$A \subsetneqq B$
- A包含B：`A supset B` 显示为：$A supset B$
- A真包含B：`A \supsetneqq B` 显示为: $A \supsetneqq B$
- A不包含于B：`A \not \subset B` 显示为：$A \not \subset B$
- A交B： `A \cap B` 显示为：$A \cap B$
- A并B：`A \cup B` 显示为：$A \cup B$
- A的闭包：`\overline{A}` 显示为：$\overline{A}$
- A减去B: `A\setminus B` 显示为：$A\setminus B$
- 实数集合： `\mathbb{R}` 显示为：$\mathbb{R}$
- 空集：`\emptyset` 显示为：$\emptyset$

### 12、数学公式对齐

- 无需对齐的公式组可以使用 gather 环境,如下实例。

```
$$
\begin{gather}
a = b+c+d \\
x = y+z
\end{gather}
$$
```

效果如下：



$$
\begin{gather}
a = b+c+d \\
x = y+z
\end{gather}
$$


- align环境可以用来对齐公式，使用&符号来标记对齐的位置，如下实例。

```
$$
\begin{align}
h(x) =& \frac{1}{\int_xt(x)\mathrm{d}x} \tag{1}\\
f(x) =& \frac{1}{\int_x\eta(x)\mathrm{d}x}g(x)\tag{2}
\end{align}
$$
```

生成结果：

$$
\begin{align}
h(x) =& \frac{1}{\int_xt(x)\mathrm{d}x} \tag{1}\\
f(x) =& \frac{1}{\int_x\eta(x)\mathrm{d}x}g(x)\tag{2}
\end{align}
$$


又比如：

```
$$
\begin{align}
a &= b + c \tag{3}\\
  &= d + e + f\tag{4}
\end{align}
$$
```

生成结果：

$$
\begin{align}
a &= b + c \tag{3}\\
  &= d + e + f\tag{4}
\end{align}
$$


- `eqnarray` 也可以用来对齐公式，同样使用`$`来标记对齐的位置。如下所示：

```
$$
\begin{eqnarray}
a & = & b + c \\
& = & d + e + f + g + h + i
+ j + k + l\\
&& +\: m + n + o \\
& = & p + q + r + s
\end{eqnarray}
$$
```

生成结果如下：



$$
\begin{eqnarray}
a & = & b + c \\
& = & d + e + f + g + h + i
+ j + k + l\\
&& +\: m + n + o \\
& = & p + q + r + s
\end{eqnarray}
$$

### 13、使用 LaTeX 写矩阵

### 简单Matrix

使用`$$\begin{matrix}…\end{matrix}$$`来生成矩阵，其中... 表示的是LaTeX 的矩阵命令，矩阵命令中每一行以 `\\`结束，矩阵的元素之间用`&`来分隔开。

例如：

```
$$
  \begin{matrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{matrix} \tag{1}
$$
```

生成结果如下：

$\begin{matrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{matrix} \tag{1}$



- 带括号的Matrix

感觉(1)中的矩阵不是很美观，可以给矩阵加上括号，加括号的方式有很多，大致可分为两种：使用\left ... \right 或者把公式命令中的matrix 改成 pmatrix、bmatrix、Bmatrix、vmatrix、Vmatrix等。

使用\left ... \right

1. {…}

实例：

```
$$
\left\{
\begin{matrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
\end{matrix}
\right\} \tag{2}
$$
```

$$
\left\{
\begin{matrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
\end{matrix}
\right\} \tag{2}
$$

实例：

```
$$
 \left[
 \begin{matrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{matrix}
  \right] \tag{3}
$$
```

生成结果：



$$
\left[
 \begin{matrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{matrix}
  \right] \tag{3}
$$

### 替换 matrix

1. […]

实例：

```
$$
 \begin{bmatrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{bmatrix} \tag{4}
$$
```

得到如下结果：

$$
\begin{bmatrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{bmatrix} \tag{4}
$$


1. {…}

实例：

```
$$
 \begin{Bmatrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{Bmatrix} \tag{5}
$$
```

得到如下结果：
$$
 \begin{Bmatrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{Bmatrix} \tag{5}
$$


### 带省略符号的Matrix

如果矩阵元素太多，可以使用\cdots ⋯ \ddots ⋱ \vdots ⋮ 等省略符号来定义矩阵。

例如：

```
$$
\left[
\begin{matrix}
 1      & 2      & \cdots & 4      \\
 7      & 6      & \cdots & 5      \\
 \vdots & \vdots & \ddots & \vdots \\
 8      & 9      & \cdots & 0      \\
\end{matrix}
\right]
$$
```

得到如下结果：

$$
\left[
\begin{matrix}
 1      & 2      & \cdots & 4      \\
 7      & 6      & \cdots & 5      \\
 \vdots & \vdots & \ddots & \vdots \\
 8      & 9      & \cdots & 0      \\
\end{matrix}
\right]
$$

### 带参数的Matrix

比如写增广矩阵，可能需要最右边一列单独考虑。可以用array命令来处理：

```
$$ 
\left[
    \begin{array}{cc|c}
      1 & 2 & 3 \\
      4 & 5 & 6
    \end{array}
\right] \tag{7}
$$
```

得到如下结果：

$$
\left[
    \begin{array}{cc|c}
      1 & 2 & 3 \\
      4 & 5 & 6
    \end{array}
\right] \tag{7}
$$


其中\begin{array}{cc|c}中的c表示居中对齐元素,|用来作为分割列的符号。

